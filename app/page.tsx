import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { QuickTips } from "@/components/quick-tips"
import { EconomySection } from "@/components/economy-section"
import { PersonalFinanceSection } from "@/components/personal-finance-section"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts - Destaques do dia */}
      <section className="container mx-auto px-4">
        <FeaturedPosts />
      </section>

      {/* Quick Tips - Dicas rápidas de dinheiro */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <QuickTips />
        </div>
      </section>

      {/* Economy and Investments */}
      <section className="container mx-auto px-4">
        <EconomySection />
      </section>

      {/* Personal Finance */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <PersonalFinanceSection />
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4">
        <Newsletter />
      </section>
    </div>
  )
}
