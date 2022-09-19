import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Card, Container, Flex, Paragraph, SponsorCard } from '@components';

const Sponsor = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }

        return (
          <Container as="section" id="sponsor">
            <Flex
              align="center"
              direction="row"
              justify="center"
              gap="32"
              css={{
                '@mobile': {
                  width: '100%',
                  flexDirection: 'column',
                },
              }}>
              {Object.keys(products).map(key => (
                <SponsorCard key={products[key].id} product={products[key]} />
              ))}
            </Flex>
          </Container>
        )
      }}
    />
  )
}

export default Sponsor
