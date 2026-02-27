import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GOOGLE_PLAY_DEV, TOOLS } from "@/constants/tools";

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
            {TOOLS.map((tool) => (
              <Card
                key={tool.id}
                className="group flex flex-col rounded-lg border border-border p-6 shadow-sm transition-colors hover:bg-accent/50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={tool.logo}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-xl object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <Badge
                      className={`w-fit text-xs font-medium ${tool.badgeClassName}`}
                    >
                      {tool.badgeLabel}
                    </Badge>
                    <h3
                      id={`${tool.id}-title`}
                      className="mt-1 text-lg font-semibold text-card-foreground"
                    >
                      {tool.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <ul className="mt-4 text-sm space-y-2 text-muted-foreground">
                  {tool.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild>
                    <a
                      href={tool.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Play
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to={tool.privacyPath}>Privacy Policy</Link>
                  </Button>
                </div>
              </Card>
            ))}
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
