import React, { useMemo, useState } from 'react'
import Stripe from '@utils/stripe';
import { Button, Card, Flex, Heading, Paragraph } from '@components';

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}

const SponsorCard = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const price = useMemo(() => product.prices[0], [product]);


  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await Stripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: price.id, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <Card
      key={product.id}
      align="center"
      direction="column"
      css={{
        width: '100%'
      }}
    >
      <Flex align="center" direction="column" gap="32">
        <Heading size="5">{product.name}</Heading>
        <Paragraph>
          {formatPrice(price.unit_amount, price.currency)}
        </Paragraph>
        <Button disabled={loading} onClick={handleSubmit}>
          Sponsor 💜
        </Button>
      </Flex>
    </Card>
  )
}

export default SponsorCard
