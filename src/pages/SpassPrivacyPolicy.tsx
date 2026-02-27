import { Link } from "react-router";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  );
}

export function SpassPrivacyPolicy() {
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
          Privacy Policy for Safe Password Manager
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <strong>Last Updated:</strong> August 31, 2025
        </p>
        <p className="mt-4 text-foreground">
          Safe Password Manager ("we", "our", or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we handle
          your data while using our offline password manager mobile application.
        </p>
      </header>

      <div className="space-y-8">
        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            1. No Internet Connection & No Data Collection
          </h2>
          <p className="mt-2 text-muted-foreground">
            We take your privacy seriously. Our app works primarily offline and
            does not connect to the internet for password storage. However,
            internet access may be used for ads and Google Play services
            (billing, license verification).
          </p>
          <p className="mt-2 text-muted-foreground">
            We do not collect, transmit, or store any personal information or
            user data on our servers. All data you enter is securely stored
            locally on your device only.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            2. Local Data Storage & Encryption
          </h2>
          <p className="mt-2 text-muted-foreground">
            Your passwords and any sensitive data stored in the app are:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Stored only on your device</li>
            <li>Encrypted using strong encryption algorithms</li>
            <li>
              Accessible only through your master password, which we do not
              store or transmit
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Losing your master password may mean losing access to your data — we
            have no way to recover it.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            3. Permissions We Use
          </h2>
          <p className="mt-2 text-muted-foreground">
            To ensure functionality, the app may request the following
            permissions:
          </p>
          <ul className="mt-4 list-disc space-y-4 pl-6 text-muted-foreground">
            <li>
              <strong>Advertising & Analytics</strong>
              <br />
              <Code>ACCESS_ADSERVICES_AD_ID</Code>,{" "}
              <Code>ACCESS_ADSERVICES_ATTRIBUTION</Code>,{" "}
              <Code>ACCESS_ADSERVICES_TOPICS</Code>,{" "}
              <Code>com.google.android.gms.permission.AD_ID</Code>
              <br />
              Used by Google AdMob to display ads. Users may opt-out of
              personalized ads via device settings.
            </li>
            <li>
              <strong>Internet & Network</strong>
              <br />
              <Code>INTERNET</Code>, <Code>ACCESS_NETWORK_STATE</Code>
              <br />
              Required for ads and Google Play license verification.
            </li>
            <li>
              <strong>Camera</strong>
              <br />
              <Code>CAMERA</Code>
              <br />
              Used to scan QR codes for importing/sharing credentials. No images
              are stored or transmitted.
            </li>
            <li>
              <strong>Storage</strong>
              <br />
              <Code>READ_EXTERNAL_STORAGE</Code>,{" "}
              <Code>WRITE_EXTERNAL_STORAGE</Code>
              <br />
              Allows import/export of encrypted password backups. Data never
              leaves your device unless exported by you.
            </li>
            <li>
              <strong>Biometric & Security</strong>
              <br />
              <Code>USE_BIOMETRIC</Code>, <Code>USE_FINGERPRINT</Code>
              <br />
              Enables biometric login (fingerprint/face unlock).
            </li>
            <li>
              <strong>System Services</strong>
              <br />
              <Code>VIBRATE</Code> (haptic feedback), <Code>WAKE_LOCK</Code>{" "}
              (prevent screen lock during sensitive actions),{" "}
              <Code>FOREGROUND_SERVICE</Code> (background tasks such as
              imports/exports).
            </li>
            <li>
              <strong>Billing & Licensing</strong>
              <br />
              <Code>com.android.vending.BILLING</Code> (in-app purchases),{" "}
              <Code>com.android.vending.CHECK_LICENSE</Code> (Google Play
              license verification).
            </li>
            <li>
              <strong>App-specific</strong>
              <br />
              <Code>com.spass.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION</Code>
              <br />
              Custom permission used for secure internal communication within
              the app.
            </li>
          </ul>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            4. Ads Usage
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our app uses Google AdMob to serve ads. These may be personalized
            or non-personalized depending on user preferences and consent. You
            can opt out of personalized ads through your device settings.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            5. Children's Privacy
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our app is not intended for children under the age of 13. We do not
            knowingly collect any personal information from anyone, including
            children.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mt-2 text-muted-foreground">
            We may update this Privacy Policy from time to time. When we do, we
            will revise the “Last Updated” date at the top of this page. Updates
            will always reflect our commitment to user privacy and offline data
            protection.
          </p>
        </section>

        <section className="border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">
            11. Contact us
          </h2>
          <p className="mt-2 text-muted-foreground">
            If you have questions about this policy or privacy in IZI Games,
            contact us:
          </p>
          <p className="mt-2 text-muted-foreground break-words">
            <strong>Email:</strong> <em>safe.pass7@gmail.com</em>
            <br />
            <strong>Developer:</strong> <em>IZITech</em>
          </p>
        </section>
      </div>

      <footer className="mt-12 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Plain-language summary:</strong> Spass stores all passwords
          securely offline on your device. Ads are shown via Google AdMob,
          which may collect limited data as described. We never store your
          passwords or personal information on our servers.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: August 31, 2025
        </p>
      </footer>
    </article>
  );
}
