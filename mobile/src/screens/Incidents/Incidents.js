import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate("Detail");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTxtBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>

            <Text style={styles.description}>Escolha abaixo um dos casos abaixo e salve o dia</Text>

            <FlatList style={styles.incidentList}
                data={[1, 2, 3, 4]}
                keyExtractor={item => String(item)}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD:</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada:</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00:</Text>

                        <TouchableOpacity style={styles.detailsButton}
                            onPress={() => navigateToDetail()}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={20} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
