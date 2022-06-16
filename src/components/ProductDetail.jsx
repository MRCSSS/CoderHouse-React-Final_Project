import React from 'react'
import 'bulma/css/bulma.min.css';
import { Columns, Container, Heading, Image, Section } from 'react-bulma-components';

const ProductDetail = ({item}) => {
    const { id,type, title, description, regularPrice, picture1Url } = item

    return (
        <Section>
            <Container>
                <Columns>
                    <Columns.Column size={3}>
                        <Heading>{type}</Heading>
                        <Heading subtitle>{title}</Heading>
                        <p>{description}</p>
                    </Columns.Column>
                    <Columns.Column size={5}>
                        <Image src={picture1Url} alt='imagenMouse'/>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Heading subtitle>$ {regularPrice}.00</Heading>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    )
}

export default ProductDetail