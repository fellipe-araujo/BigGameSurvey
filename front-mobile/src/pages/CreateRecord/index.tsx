import React, { useState, useEffect } from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import PlatformCard from "../../components/PlatformCard";
import { GamePlatform, Game } from "../../components/PlatformCard/types";
import RNPickerSelect from "react-native-picker-select";
import api from "../../services/api";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

const placeholder = {
  label: "Selecione o game",
  value: null,
};

const mapSelectValues = (games: Game[]) => {
  return games.map((game) => ({
    ...game,
    label: game.title,
    value: game.id,
  }));
};

const CreateRecord = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState("");
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
    const gamesByPlatform = allGames.filter(
      (game) => game.plataform === selectedPlatform
    );
    setFilteredGames(gamesByPlatform);
  };

  const handleSubmit = () => {
    const payload = { name, age, gameId: selectedGame };

    api
      .post("/records", payload)
      .then(() => {
        Alert.alert("Dados salvos com sucesso");
        setName("");
        setAge("");
        setSelectedGame("");
        setPlatform(undefined);
      })
      .catch(() => Alert.alert("Erro ao salvar informações!"));
  };

  useEffect(() => {
    api
      .get("/games")
      .then((response) => {
        const selectValues = mapSelectValues(response.data);
        setAllGames(selectValues);
      })
      .catch(() => Alert.alert("Erro ao listar os jogos!"));
  }, []);
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#9E9E9E"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.inputText}
            placeholder="Idade"
            placeholderTextColor="#9E9E9E"
            onChangeText={(text) => setAge(text)}
            value={age}
          />
          <View style={styles.platformContainer}>
            <PlatformCard
              platform="PC"
              icon="laptop"
              onChange={handleChangePlatform}
              activePlatform={platform}
            />
            <PlatformCard
              platform="XBOX"
              icon="xbox"
              onChange={handleChangePlatform}
              activePlatform={platform}
            />
            <PlatformCard
              platform="PLAYSTATION"
              icon="playstation"
              onChange={handleChangePlatform}
              activePlatform={platform}
            />
          </View>
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedGame(value);
            }}
            placeholder={placeholder}
            value={selectedGame}
            items={filteredGames}
            style={pickerSelecteStyles}
            Icon={() => {
              return <Icon name="chevron-down" color="#9E9E9E" size={25} />;
            }}
          />
          <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>SALVAR</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const pickerSelecteStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#ED7947",
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#ED7947",
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50,
  },
  placeholder: {
    color: "#9E9E9E",
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default CreateRecord;
