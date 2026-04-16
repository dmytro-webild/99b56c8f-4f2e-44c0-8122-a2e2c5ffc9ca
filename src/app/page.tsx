"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';
import { Coffee, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "L'Esprit",
          id: "about",
        },
        {
          name: "Le Menu",
          id: "products",
        },
        {
          name: "Notre Engagement",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Matin Péi"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Matin Péi"
      description="Vos matins commencent ici. Café. Soleil. Barachois. Une pause qui compte."
      buttons={[
        {
          text: "Réserver",
          href: "#contact",
        },
        {
          text: "Voir le menu",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-breakfast-sandwiches-with-salmon-avocado-with-copy-space_23-2148797019.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="L'Esprit"
      title="Ici, on ne vient pas juste manger. On prend le temps."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Produits",
          description: "Sélectionnés et améliorés chaque semaine pour une fraîcheur absolue.",
          icon: Sparkles,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/concept-tasty-snack-hot-drink-cookies-shape-coffee-seeds_185193-110871.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fruit-salad-coconut-pineapple-plates-top-view_23-2148494807.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-breakfast-sandwiches-with-salmon-avocado-with-copy-space_23-2148797019.jpg",
          imageAlt: "artisan coffee premium beans closeup",
        },
        {
          title: "Recettes",
          description: "Des classiques revisités avec une touche péi unique.",
          icon: Coffee,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/professional-chef-preparing-food-kitchen_23-2149727971.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-assorted-breakfast-with-oatmeal-fried-eggs-human-hand-white-plate_176474-3281.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-wooden-rocking-chair-wooden-patio_181624-60471.jpg",
          imageAlt: "artisan coffee premium beans closeup",
        },
        {
          title: "Café",
          description: "Une sélection rigoureuse pour les palais exigeants.",
          icon: Coffee,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-3d-roasted-coffee-beans_23-2151083807.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/ice-cream-with-mixed-fruit_1339-4923.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cottage-cheese-pancakes-cheesecakes-with-honey-currants-blueberries-blue-background-sweet-food-breakfast-new-year_127032-2542.jpg",
          imageAlt: "artisan coffee premium beans closeup",
        },
      ]}
      title="Notre engagement aujourd'hui"
      description="Nous repensons le petit-déjeuner avec exigence et passion."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Macatia Gourmet",
          price: "8€",
          variant: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/cottage-cheese-pancakes-cheesecakes-with-honey-currants-blueberries-blue-background-sweet-food-breakfast-new-year_127032-2542.jpg",
        },
        {
          id: "2",
          name: "Bol Ananas Coco",
          price: "12€",
          variant: "Frais",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-omelette-with-cucumber-slices-coriander-blue-plate_23-2147862974.jpg",
        },
        {
          id: "3",
          name: "Tartine Dakatine",
          price: "9€",
          variant: "Authentique",
          imageSrc: "http://img.b2bpic.net/free-photo/pancakes-with-blueberry_74190-6060.jpg",
        },
        {
          id: "4",
          name: "Café Bourbon",
          price: "5€",
          variant: "Sélection",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ham-salad-with-vegetables_140725-2655.jpg",
        },
        {
          id: "5",
          name: "Plateau Péi",
          price: "15€",
          variant: "Partage",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-easter-coffee-decorations_23-2150249800.jpg",
        },
        {
          id: "6",
          name: "Jus Frais Tropical",
          price: "6€",
          variant: "Saison",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-salted-chips-designed-with-strawberries-inside-plate-along-with-blackthorns-white-table-chips-snack-fruit-berry_140725-24514.jpg",
        },
      ]}
      title="Saveurs péi revisitées"
      description="Macatia, dakatine, coco, ananas — le voyage commence dans votre assiette."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={true}
      title="Une équipe qui sourit, une journée qui brille."
      tag="Nos Talents"
      membersAnimation="slide-up"
      members={[
        {
          id: "m1",
          name: "Katarina",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-spending-time-home_23-2150170884.jpg",
        },
        {
          id: "m2",
          name: "Marc",
          imageSrc: "http://img.b2bpic.net/free-photo/two-women-having-lunch-restaurant_141793-2464.jpg",
        },
        {
          id: "m3",
          name: "Sophie",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-posing-indoors_23-2149745617.jpg",
        },
        {
          id: "m4",
          name: "Jean",
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-serving-cup-coffee-customer_1170-634.jpg",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "100%",
          title: "Produits frais",
          items: [
            "Sourcing local",
            "Saisonnalité",
            "Qualité",
          ],
        },
        {
          id: "2",
          value: "24h",
          title: "Service attentionné",
          items: [
            "Sourire",
            "Disponibilité",
            "Partage",
          ],
        },
        {
          id: "3",
          value: "50+",
          title: "Recettes péi",
          items: [
            "Créativité",
            "Tradition",
            "Passion",
          ],
        },
      ]}
      title="La qualité en chiffres"
      description="L'exigence au service de votre confort."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Claire",
          handle: "@claire",
          testimonial: "Katarina nous a littéralement fait sourire toute la journée. Un service comme on n'en voit plus.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148395390.jpg",
        },
        {
          id: "2",
          name: "Thomas",
          handle: "@thomas",
          testimonial: "La meilleure pause petit-déjeuner au Barachois. Le macatia est à tomber.",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-eating-meal-flat-lay-concept_53876-23442.jpg",
        },
        {
          id: "3",
          name: "Julie",
          handle: "@julie",
          testimonial: "Une équipe solaire. On se sent comme chez soi, en mieux.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-smiling-woman-with-collected-hair-wearing-white-shirt_291650-656.jpg",
        },
        {
          id: "4",
          name: "Lucas",
          handle: "@lucas",
          testimonial: "Le café est sélectionné avec une exigence qui fait toute la différence.",
          imageSrc: "http://img.b2bpic.net/free-vector/vintage-pattern-coffee-croissant_23-2147601069.jpg",
        },
        {
          id: "5",
          name: "Emma",
          handle: "@emma",
          testimonial: "Un cadre apaisant et un service qui prend le temps de nous écouter.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2602.jpg",
        },
      ]}
      title="Ce que vous vivez ici"
      description="Plus qu'un repas, une parenthèse."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Dois-je réserver ?",
          content: "Nous conseillons vivement de réserver le week-end.",
        },
        {
          id: "2",
          title: "Proposez-vous des options végétaliennes ?",
          content: "Oui, notre carte inclut plusieurs créations végétales chaque semaine.",
        },
        {
          id: "3",
          title: "Quel est votre engagement local ?",
          content: "Nous travaillons avec des producteurs péi pour 90% de nos ingrédients.",
        },
      ]}
      sideTitle="Questions fréquentes"
      sideDescription="Besoin d'informations sur notre établissement ?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Réserver"
      title="Prenez une pause chez nous"
      description="Réservez votre table et laissez-vous porter par l'esprit Matin Péi."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Matin Péi",
          items: [
            {
              label: "Le Concept",
              href: "#about",
            },
            {
              label: "Le Menu",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Légal",
          items: [
            {
              label: "Mentions Légales",
              href: "#",
            },
            {
              label: "Confidentialité",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Matin Péi"
      bottomRightText="Barachois, La Réunion"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
