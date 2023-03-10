import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantName === "") {
      return Alert.alert(
        "Participante não pode estar vazio",
        "Inclua pelo menos três letras ao participante"
      );
    }
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existem participantes na lista com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }
  function handleParticipantRemove(name: string) {
    setParticipants((prevState) =>
      prevState.filter((participant) => participant !== name)
    );

    Alert.alert("Remover", `Deseja remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            onRemove={() => handleParticipantRemove(item)}
            name={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
