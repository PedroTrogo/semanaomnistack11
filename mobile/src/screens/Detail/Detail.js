import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const message = "Corpo da mensagem!";

    function navigateToDetail() {
        navigation.navigate("Incidents");
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: "Heroi do caso: #caso",
            recipients: ["teste@gmail.com"],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL("whatsapp://send?phone=9999-9999&text=${message}");
    }

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity style={styles.detailsButton}
                    onPress={() => navigateToDetail()}
                >
                    <Feather name="arrow-left" size={25} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD:</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada:</Text>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>A cadelinha Jolie foi atropelada por um carro no bairro Santana:</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00:</Text>

            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.title}>Salve o dia!</Text>
                <Text style={styles.title}>Seja o herói desse caso.</Text>

                <Text style={styles.sub}>Entre em contato:</Text>

                <View style={styles.contactContainer}>
                    <TouchableOpacity style={styles.contactButton}
                        onPress={() => { sendWhatsapp() }}
                    >
                        <Text style={styles.btnTxt}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactButton}
                        onPress={() => { sendEmail() }}
                    >
                        <Text style={styles.btnTxt}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}