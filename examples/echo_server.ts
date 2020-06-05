// https://deno.land/manual/examples/tcp_echo
// $ deno run --allow-net echo_server.ts
const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}
