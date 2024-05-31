import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Pantalla3 = ({ navigation }) => {
    const informacion = data;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    const coloresAquosos = [
        { id: '1', nombre: 'Turquoise', descripcion: '#5DC1B9', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgsEBTBUBbM98aHMbgVjC1DuIds3AWi-ijw&s' },
        { id: '2', nombre: 'Emerald', descripcion: '#00554E', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NT1fOoDaS7MULn8L7xgw87fZXXajiowKAQ&s' },
        { id: '3', nombre: 'Peter river', descripcion: '#3498DB', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWSRlwIsJVr_FTV26TpKOWgFHM_TqsP71PBPa1J4law&s' },
        { id: '4', nombre: 'Amethyst', descripcion: '#898ac0', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/1200px-Amatista_Laye_2.jpg' },
        { id: '5', nombre: 'Wet asphalt', descripcion: '#5C5E58', imagen: 'https://as1.ftcdn.net/v2/jpg/03/71/17/68/1000_F_371176842_Gi6GDBcdiQpMD7mFxhRIwHYw01BbxpR4.jpg' },
        { id: '6', nombre: 'Green sea', descripcion: '#2E8B57', imagen: 'https://i.pinimg.com/originals/e4/e1/bc/e4e1bc641cb53c6228b1fa37319d6ed7.jpg' }
    ];

    const coloresCalidos = [
        { id: '1', nombre: 'Nephritis', descripcion: '#27AE60', imagen: 'https://ih1.redbubble.net/image.368416231.2054/fpp,small,lustre,wall_texture,product,750x1000.u3.jpg' },
        { id: '2', nombre: 'Belize hole', descripcion: '#2980B9', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Great_Blue_Hole.jpg' },
        { id: '3', nombre: 'Wisteria', descripcion: '#8E44AD', imagen: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/03/GettyImages-1422256818.jpg' },
        { id: '4', nombre: 'Midnight blue', descripcion: '#2C3E50', imagen: 'https://i.pinimg.com/474x/a4/d9/0f/a4d90fa0ca1052674999806a25cb214d.jpg' },
        { id: '5', nombre: 'Sun flower', descripcion: '#F1C40F', imagen: 'https://www.chicagobotanic.org/sites/default/files/images/sunflowers/sunflower_big1.jpg' },
        { id: '6', nombre: 'Carrot', descripcion: '#E67E22', imagen: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg' }
    ];

    const otrosColores = [
        { id: '1', nombre: 'Alizarin', descripcion: '#E74C3C', imagen: 'https://www.naturalpigments.com/media/catalog/product/cache/89f5a0a7a558a23712f8c6f30b3bed84/4/5/457-11_base.jpg' },
        { id: '2', nombre: 'Clouds', descripcion: '#ECF0F1', imagen: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL0hvdy1DbG91ZHMtV29yay5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==' },
        { id: '3', nombre: 'Concrete', descripcion: '#95A5A6', imagen: 'https://hips.hearstapps.com/hmg-prod/images/concrete-wall-royalty-free-image-1572896179.jpg?crop=0.6673xw:1xh;center,top&resize=1200:*' },
        { id: '4', nombre: 'Orange', descripcion: '#F39C12', imagen: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg' },
        { id: '5', nombre: 'Pumpkin', descripcion: '#D35400', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/FrenchMarketPumpkinsB.jpg' },
        { id: '7', nombre: 'Pomegranate', descripcion: '#C0392B', imagen: 'https://healthyfamilyproject.com/wp-content/uploads/2020/05/Pomegranate-background.jpg' },
        { id: '8', nombre: 'Silver', descripcion: '#BDC3C7', imagen: 'https://i0.wp.com/www.elf925.com/blog/wp-content/uploads/AdobeStock_249833094.jpeg?resize=768%2C576&ssl=1' },
        { id: '6', nombre: 'Asbestos', descripcion: '#7F8C8D', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Asbestos_with_muscovite.jpg/320px-Asbestos_with_muscovite.jpg' }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Colores aquosos</Text>
                </View>
                <FlatList
                    data={coloresAquosos}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Colores cálidos</Text>
                </View>
                <FlatList
                    data={coloresCalidos}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Otros colores</Text>
                </View>
                <FlatList
                    data={otrosColores}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <Boton
                textoBoton='Ir a creditos'
                accionBoton={irPantalla2}
            />
        </ScrollView>
    );
};

export default Pantalla3;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingVertical: 20,
    },
    sectionContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    grayBox: {
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
    },
    grayBoxText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    flatlistContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    card: {
        borderRadius: 8,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        width: '31%',
        height: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
    },
    cardText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
    },
});
