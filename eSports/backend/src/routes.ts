import { Router } from "express";
import { PrismaClient } from "@prisma/client";

import { convertHourToMinutes } from "./utils/convertHourToMinutes";
import { convertMinutesToHour } from "./utils/convertMinutesToHour";

const router = Router();
const prisma = new PrismaClient();

interface IBodyProps {
	id: string;
	name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: string[];
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
}

router.get("/games", async (req, res) => {
	const games = await prisma.game.findMany({
		include: {
			_count: {
				select: {
					ads: true,
				},
			},
		},
	});

	return res.status(200).json(games);
});

router.get("/games/:id/ads", async (req, res) => {
	const gameId = req.params.id;

	const ads = await prisma.ad.findMany({
		select: {
			id: true,
			name: true,
			weekDays: true,
			useVoiceChannel: true,
			yearsPlaying: true,
			hourStart: true,
			hourEnd: true,
		},
		where: {
			gameId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return res.status(200).json(
		ads.map((ad) => {
			return {
				...ad,
				weekDays: ad.weekDays.split(","),
				hourStart: convertMinutesToHour(ad.hourStart),
				hourEnd: convertMinutesToHour(ad.hourEnd),
			};
		})
	);
});

router.get("/ads/:id/discord", async (req, res) => {
	const adId = req.params.id;

	const ad = await prisma.ad.findUnique({
		select: {
			discord: true,
		},
		where: {
			id: adId,
		},
	});

	return res.send({
		discord: ad?.discord,
	});
});

router.post("/games/:id/ads", async (req, res) => {
	const gameId = req.params.id;
	const body: IBodyProps = req.body;

	const ad = await prisma.ad.create({
		data: {
			gameId,
			name: body.name,
			yearsPlaying: body.yearsPlaying,
			discord: body.discord,
			weekDays: body.weekDays.join(","),
			hourStart: convertHourToMinutes(body.hourStart),
			hourEnd: convertHourToMinutes(body.hourEnd),
			useVoiceChannel: body.useVoiceChannel,
		},
	});

	return res.status(201).json(ad);
});

export { router };
