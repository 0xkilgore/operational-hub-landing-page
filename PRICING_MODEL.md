# Operational Hub - Pricing & Product Model Reference

## Quick Reference

### Pricing Tiers

| Tier | Setup Fee | Platform Fee | Variable | Target |
|------|-----------|--------------|----------|--------|
| Free | $0 | $0 | N/A | Explorers |
| Starter | $6,848.53 | $750/mo | $21/invoice | Small teams, low volume |
| Standard | $6,848.53 | $750/mo | $500/seat/mo | Growing teams |
| Custom | Custom | Custom | Custom | Enterprise |

### Break-Even Points
- **Standard:** 3 seats
- **Starter:** ~58 invoices/month

### Sweet Spot
5+ seat Standard clients = 40%+ margins

---

## Tier Details

### Free
- Invoice management tools
- Legal document templates
- Platform exploration

### Starter (Basic)
- Swiss Association entity setup
- Registered address (Zug)
- Annual tax filings & financial statements
- Basic compliance
- Invoice processing
- **Excludes:** Monthly accounting, contributor management

### Standard
Everything in Starter, plus:
- Monthly accounting close
- Monthly bookkeeping
- Contributor management
- VAT reporting (quarterly)
- Payment processing coordination
- Dedicated support

### Custom/Enterprise
- Custom integrations
- Dedicated account management
- SLA guarantees
- Volume discounts
- Multi-entity support

---

## Add-Ons (prices not shown on website)

| Add-On | Our Cost | With 5% Margin |
|--------|----------|----------------|
| Contributor Onboarding (per 10) | $125/mo | $131.25/mo |
| Payroll Processing | $150/mo | $157.50/mo |
| Credit Card Assistance | $250/mo | $262.50/mo |

---

## Cost Structure

### Setup (One-Time, Pass-Through)
- Our cost: $6,522.41
- 5% margin: $326.12
- Client pays: $6,848.53

### Monthly Operational (Our Costs)
- Total: $1,949.48/month ($23,393.74/year)
- Includes: Domicile, accounting, compliance, software, Swiss fees

### Payment Processing (Pass-Through, No Margin)
- $1,243/month based on ~$101k volume
- Crypto-to-fiat: 0.9% of volume
- Request Finance: $334/month

---

## Margin Analysis

### Standard Tier by Team Size

| Seats | Revenue | Margin | Margin % |
|-------|---------|--------|----------|
| 2 | $1,750 | -$199 | -11.4% |
| 3 | $2,250 | $301 | 13.4% |
| 5 | $3,250 | $1,301 | 40.0% |
| 7 | $4,250 | $2,301 | 54.1% |
| 10 | $5,750 | $3,801 | 66.1% |

### 5-Seat Client Annual Projection

| | Year 1 | Year 2+ |
|--|--------|---------|
| Revenue | $45,849 | $39,000 |
| Cost | $29,916 | $23,394 |
| Margin | $15,932 | $15,606 |
| Margin % | 34.7% | 40.0% |

---

## Key Files

- **Pricing page:** `/app/pricing/page.tsx`
- **Source model:** `/Users/kilgore/Downloads/OH_Pricing_Model.csv`
- **Cost breakdown:** `/Users/kilgore/Downloads/OH Pricing Risk - Cost OH.csv`
- **Full documentation:** `/Users/kilgore/Downloads/Operational_Hub_Pricing_Product_Model.md`

---

## Strategy Notes

1. Setup margin intentionally low (5%) - make money on recurring
2. Payment processing is pass-through (no margin)
3. Free tier for lead capture and self-service users
4. Website supports both paths: book-a-call AND self-service
5. CHF/USD rate: 1.109133

---

*Last updated: January 2026*
