import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GOOGLE_PLAY_DEV =
  "https://play.google.com/store/apps/dev?id=5065874752111128143";
const SPASS_PLAY = "https://play.google.com/store/apps/details?id=com.spass";
const FLYING_BALL_PLAY =
  "https://play.google.com/store/apps/details?id=com.izitech.izigames";

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="secondary"
              className="rounded-full border border-border px-3 py-1 text-xs font-medium"
            >
              Privacy-first apps · Smart tools · Skill-based games
            </Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Technology and games designed to simplify life — and make it more
              fun.
            </h1>
            <p className="mt-6 text-lg leading-7 text-muted-foreground">
              IZITech builds secure productivity tools and engaging mobile games
              crafted with performance, simplicity, and user respect at the
              core. Whether you're organizing your digital life or chasing high
              scores, your privacy always comes first.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#apps">Explore our apps & games</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={GOOGLE_PLAY_DEV}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Developer Page
                </a>
              </Button>
            </div>
          </div>
          {/* What drives us card */}
          <div className="mx-auto mt-16 max-w-lg">
            <Card className="rounded-lg border border-border p-6 shadow-sm">
              <CardHeader className="p-0">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-muted-foreground">
                    User-first design
                  </span>
                </div>
                <CardTitle className="text-base">What drives us</CardTitle>
              </CardHeader>
              <CardContent className=" p-0 text-sm text-muted-foreground">
                <ul className="list-none space-y-2 p-0">
                  <li>Privacy by default</li>
                  <li>Fast, lightweight performance</li>
                  <li>Fun, skill-driven experiences</li>
                  <li>Honest design — no dark patterns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="apps" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured tools
            </h2>
            <p className="mt-2 text-muted-foreground">
              A selection of products crafted by IZITech.
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {/* Safe Password Manager */}
            <Card className="group flex flex-col rounded-lg border border-border p-6 shadow-sm transition-colors hover:bg-accent/50">
              <Badge className="bg-[#3146E8] text-white w-fit text-xs font-medium">
                New · Security
              </Badge>
              <h3
                id="spm-title"
                className="text-lg font-semibold text-card-foreground"
              >
                Safe Password Manager
              </h3>
              <p className="text-sm text-muted-foreground">
                A secure, offline password vault with AES-256 encryption. Free
                plan stores up to 10 passwords with ads; upgrade for unlimited
                and ad-free.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>AES-256 encryption</li>
                <li>Fast search & categories</li>
                <li>QR credential sharing (Premium)</li>
                <li>Biometric login & auto-logout (Premium)</li>
                <li>Import/Export (Premium)</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={SPASS_PLAY}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Play
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/spass-privacy-policy">Privacy Policy</Link>
                </Button>
              </div>
            </Card>

            {/* Flying Ball */}
            <Card className="group flex flex-col rounded-lg border border-border p-6 shadow-sm transition-colors hover:bg-accent/50">
              <Badge
                variant="default"
                className="bg-[#6AC66F] text-white w-fit text-xs font-medium"
              >
                Arcade · Skill Game
              </Badge>
              <h3
                id="fb-title"
                className="text-lg font-semibold text-card-foreground"
              >
                Flying Ball
              </h3>
              <p className="text-sm text-muted-foreground">
                A fast-paced arcade challenge inspired by classic tap-to-fly
                mechanics. Master precise timing, unlock skins & environments,
                and take on progressively harder moving pipes.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>Skill-based gameplay with progressive difficulty</li>
                <li>Unlockable skins & dynamic environments</li>
                <li>Achievements & daily challenges</li>
                <li>Optional lifetime “Remove Ads” upgrade</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-auto">
                <Button asChild>
                  <a
                    href={FLYING_BALL_PLAY}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Play
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/flying-ball-privacy-policy">Privacy Policy</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Our values
            </h2>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-3 lg:max-w-4xl">
            <Card className="rounded-lg border border-border p-6 shadow-sm">
              <h3 className="text-base font-semibold text-card-foreground">
                Privacy above all
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We never collect unnecessary data. Your information stays yours.
              </p>
            </Card>
            <Card className="rounded-lg border border-border p-6 shadow-sm">
              <h3 className="text-base font-semibold text-card-foreground">
                Simplicity & speed
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our tools are lightweight, intuitive, and optimized for
                performance.
              </p>
            </Card>
            <Card className="rounded-lg border border-border p-6 shadow-sm">
              <h3 className="text-base font-semibold text-card-foreground">
                User respect
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear communication, no dark patterns, and honest design
                choices.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
