import dns from "dns/promises";

export default async function handlerDomain(req, res) {
    const domain = req.body.domain;

    try {
        const result = await dns.lookup(domain);
        res.json(result.address);
    } catch (e) {
        res.json("Domain tidak valid");
    }
}