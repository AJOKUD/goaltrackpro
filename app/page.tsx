import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle } from 'lucide-react'

const pricingPlans = [
  {
    name: "Starter",
    price: "$9.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Set up to 5 goals",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$29.99",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited goals",
      "Advanced analytics",
      "Team collaboration",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option"
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}