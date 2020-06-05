// https://deno.land/manual/examples/unix_cat
// $ deno run --allow-read cat.ts /etc/passwd
for (let i = 0; i < Deno.args.length; i++) {
    let filename = Deno.args[i];
    let file = await Deno.open(filename);
    await Deno.copy(file, Deno.stdout);
    file.close()
}
