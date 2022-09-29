import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface IDuoCard {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface IDuoCardProps {
  data: IDuoCard;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: IDuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano${data.yearsPlaying > 1 ? "s" : ""}`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia${
          data.weekDays.length > 1 ? "s" : ""
        } \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
