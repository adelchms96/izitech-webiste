import { Link } from "react-router";

export function FlyingBallPrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground"
      >
        ← Home
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Flying Ball — Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <strong>Last Updated:</strong> February 27, 2026
        </p>
        <p className="mt-4 text-foreground">
          Welcome to <strong>Flying Ball</strong>, an arcade skill game developed
          by <strong>IZITech</strong>. Your privacy is important to us. This
          Privacy Policy explains what information may be collected by the app
          and by third-party services used within the app.
        </p>
      </header>

      <div className="space-y-8">
        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">1. Scope</h2>
          <p className="mt-2 text-muted-foreground">
            This Privacy Policy applies to the Flying Ball mobile application
            (the “App”). It does not apply to app stores (such as Google Play)
            or external services you may access outside the App.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            2. Information We Do NOT Collect Directly
          </h2>
          <p className="mt-2 text-muted-foreground">
            Flying Ball is designed to run primarily on your device. We do{" "}
            <strong>not</strong>:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>collect or store personal data on our own servers;</li>
            <li>require account registration;</li>
            <li>
              access your contacts, camera, microphone, photos, or precise GPS
              location;
            </li>
            <li>collect sensitive personal information.</li>
          </ul>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            3. Game Data Stored Locally
          </h2>
          <p className="mt-2 text-muted-foreground">
            The App stores gameplay data locally on your device, including:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>High scores;</li>
            <li>Achievements;</li>
            <li>Unlocked skins and environments;</li>
            <li>Daily task progress;</li>
            <li>Game settings and preferences.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">This data:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>is stored only on your device;</li>
            <li>is not transmitted to our servers;</li>
            <li>may be lost if you uninstall the App or clear its data.</li>
          </ul>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            4. Advertising
          </h2>
          <p className="mt-2 text-muted-foreground">
            Flying Ball displays advertisements provided by third-party ad
            networks (for example, Google AdMob or similar providers).
          </p>
          <p className="mt-4 text-muted-foreground">
            These advertising partners may automatically collect certain
            information, such as:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Advertising ID (resettable device identifier);</li>
            <li>Device type, OS version, language;</li>
            <li>Approximate location based on IP address;</li>
            <li>Interaction data related to ads (such as rewarded ad views).</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            This information is used to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Serve relevant ads;</li>
            <li>Measure ad performance;</li>
            <li>Prevent fraud and abuse.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            We do not control how ad providers process data. Their use of
            information is governed by their own privacy policies.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            5. In-App Purchases
          </h2>
          <p className="mt-2 text-muted-foreground">
            The App may offer optional in-app purchases, such as a lifetime
            “Remove Ads” upgrade.
          </p>
          <p className="mt-2 text-muted-foreground">
            All payments are processed securely by the platform store (e.g.,
            Google Play). We do not receive or store your payment information.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            6. Children’s Privacy
          </h2>
          <p className="mt-2 text-muted-foreground">
            Flying Ball is a general-audience game. Because the App displays
            ads, third-party advertising networks may collect limited device
            information.
          </p>
          <p className="mt-2 text-muted-foreground">
            We do not knowingly collect personal information from children under
            13 (or the minimum age required in your country). If you believe
            personal information has been provided to us, please contact us
            and we will take appropriate action.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            7. Your Choices
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>You may reset your Advertising ID in your device settings;</li>
            <li>
              You may opt out of personalized ads through your device’s ad
              settings;
            </li>
            <li>You may uninstall the App to remove locally stored data.</li>
          </ul>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            8. Data Retention
          </h2>
          <p className="mt-2 text-muted-foreground">
            We do not retain personal data on our servers. Third-party ad
            networks may retain information according to their own privacy
            policies.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            9. Security
          </h2>
          <p className="mt-2 text-muted-foreground">
            Local game data remains on your device. We recommend keeping your
            device secure and updated to protect your information.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            10. Changes to This Policy
          </h2>
          <p className="mt-2 text-muted-foreground">
            We may update this Privacy Policy to reflect changes in features,
            legal requirements, or advertising integrations. The updated
            version will always include a revised “Last Updated” date.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            11. Contact
          </h2>
          <p className="mt-2 text-muted-foreground">
            If you have any questions regarding this Privacy Policy, you may
            contact:
          </p>
          <p className="mt-2 text-muted-foreground break-words">
            <strong>Email:</strong> adelchms96@gmail.com
            <br />
            <strong>Developer:</strong> IZITech
          </p>
        </section>
      </div>

      <footer className="mt-12 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Summary:</strong> Flying Ball stores game progress locally on
          your device. The app displays ads from third-party providers who may
          collect limited device information to serve advertisements. We do not
          collect or store personal data on our own servers.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 27, 2026
        </p>
      </footer>
    </article>
  );
}
