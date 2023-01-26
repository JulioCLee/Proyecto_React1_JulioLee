import React, { useState, useEffect, } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';




const MiApi = () => {
    const [pokemon, setPokemon] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [selector, setselector] = useState('asc');

    const obtenerDato = (e) => {
        e.preventDefault();
    }

    const filtrado = (e) => {
        setFiltro(e.target.value);
    }

    const select = (e) => {
        setselector(e.target.value)
    }

    const orderASC = (char1, char2) =>
        char1.name > char2.name ? 1 : char1.name < char2.name ? -1 : 0;

    const orderDESC = (char1, char2) =>
        char1.name < char2.name ? 1 : char1.name > char2.name ? -1 : 0;

    useEffect(() => {

        async function getData() {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
                .then(res => {
                    for (let i = 0; i < res.data.results.length; i++) {
                        axios.get(res.data.results[i].url)
                            .then(result => {
                                setPokemon(prevArray => [...prevArray, result.data])
                            });

                    }
                })
        }
        getData();
    }, []);

    return (
        <Container className='contenedor'>
            <form onSubmit={obtenerDato} className='cajaBuscador' >
                <p>Buscar Pokemón</p>
                <div className='buscador'>
                    <input type="text" name='buscador' placeholder=' Buscar...'
                        onChange={filtrado} />
                </div>
                <div>
                    <p>Ordernar: </p>
                    <select onChange={select}>
                        <option value="asc">Ordenar de A a Z</option>
                        <option value="desc">Ordenar de Z a A</option>
                    </select>
                </div>
            </form>
            <Row className='row'>
                {pokemon
                    .filter((p) => {
                        return p.name.toLowerCase().includes(filtro.toLowerCase());
                    }).sort(selector === "asc" ? orderASC : orderDESC)
                    .map((poke, index) => {
                        return (
                            <Col key={index} style={{ width: '18rem' }} >
                                <Card className='card2' style={{ width: '14rem' }} >
                                    <Card.Title className='titulo' >{poke.name}</Card.Title>
                                    <Card.Img variant="top" src={poke.sprites.other.dream_world.front_default} style={{ Width: 'auto', height: '90px' }} />
                                    <hr />
                                    <Card.Body className='cardBody' style={{ padding: '0' }}>
                                        <Card.Text style={{ color: 'black' }}>
                                            ID: {poke.id}
                                        </Card.Text>
                                        <Card.Text className='peso'>
                                            Weight: {poke.weight}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                    )}
            </Row>
        </Container>
    )
}

export default MiApi