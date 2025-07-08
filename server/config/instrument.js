import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://e9a05d60e6691e3eddf3f2586d590b60@o4509625974063104.ingest.de.sentry.io/4509625986908240",
    integrations: [
        nodeProfilingIntegration(),
        Sentry.mongooseIntegration()
    ],
    profileSessionSampleRate: 1.0,
    profileLifecycle: "trace",
    sendDefaultPii: true,
});

Sentry.startSpan({ name: "My Span" }, () => {
    // Your code to profile
});