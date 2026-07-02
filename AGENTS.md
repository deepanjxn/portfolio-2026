<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:runtime-error-protocol -->
# Runtime Error Handling During Development

1. Wait for webpack/Turbopack compilation to finish.
2. Verify whether the error reproduces after one manual refresh.
3. If the error disappears, treat it as a transient Fast Refresh or stale cache issue.
4. Do NOT modify source code unless the error is reproducible.
5. Only investigate persistent runtime errors.
<!-- END:runtime-error-protocol -->
