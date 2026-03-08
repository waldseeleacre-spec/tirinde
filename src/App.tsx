import { LangProvider } from './i18n/LangContext'
import { Block01Hero } from './blocks/Block01Hero'
import { Block02HollowEcho } from './blocks/Block02HollowEcho'
import { Block03TruthMechanism } from './blocks/Block03TruthMechanism'
import { Block04Opportunity } from './blocks/Block04Opportunity'
import { Block05Transmitters } from './blocks/Block05Transmitters'
import { Block06Pact } from './blocks/Block06Pact'
import { Block07Offer } from './blocks/Block07Offer'
import { BlockComparison } from './blocks/BlockComparison'
import { Block08WhoItIsFor } from './blocks/Block08WhoItIsFor'
import { Block09HowItWorks } from './blocks/Block09HowItWorks'
import { Block10Guarantee } from './blocks/Block10Guarantee'
import { Block11FAQ } from './blocks/Block11FAQ'
import { Block12Closing } from './blocks/Block12Closing'

// ─── App ────────────────────────────────────────────────────
// Block 1  — Hero             ✓ approved
// Block 2  — Hollow Echo      ✓ approved
// Block 3  — Truth Mechanism  ✓ approved
// Block 4  — The Opportunity  ✓ approved
// Block 5  — Who Transmits    ✓ approved
// Block 6  — The Pact         ✓ approved
// Block 7  — Offer            ✓ approved
// Block 7b — Comparison       ✓ implemented (between 7 and 8)
// Block 8  — Who It Is For    ✓ implemented
// Block 9  — VOZ Method       ✓ implemented
// Block 10 — Guarantee        ✓ implemented
// Block 11 — FAQ              ✓ implemented
// Block 12 — Closing CTA      ✓ implemented
// ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <LangProvider>
      <main className="min-h-screen" style={{ background: '#284C42' }}>
        <Block01Hero />
        <Block02HollowEcho />
        <Block03TruthMechanism />
        <Block04Opportunity />
        <Block05Transmitters />
        <Block06Pact />
        <Block07Offer />
        <BlockComparison />
        <Block08WhoItIsFor />
        <Block09HowItWorks />
        <Block10Guarantee />
        <Block11FAQ />
        <Block12Closing />
      </main>
    </LangProvider>
  )
}
