export default function DomainResolver() {
    async function handler(e) {
        e.preventDefault();

        const data = JSON.stringify({
            domain: e.target.domain.value
        });
        const response = await fetch("/api/domain-resolver", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });

        const tr = document.createElement("tr");

        const tdDomain = document.createElement("td");
        tdDomain.textContent = e.target.domain.value;
        tr.appendChild(tdDomain);

        const tdIP = document.createElement("td");
        tdIP.textContent = await response.json();
        tr.appendChild(tdIP);

        document.getElementById("hasil").appendChild(tr);

        document.forms["domain-resolver"].reset();
    }

    return (
        <div>
            <p><a href="/">&#8656; Kembali ke laptop</a></p>
            <h1>Domain Resolver</h1>
            <p>Bagaimana cara pakainya?</p>
            <ol>
                <li>Masukkan nama domain yang ingin cek</li>
                <li>Pastikan nama domain tidak salah tanpa protokol http:// ataupun https://</li>
                <li>Anda akan mendapatkan ip dari domain tersebut</li>
            </ol>
            <form name="domain-resolver" onSubmit={handler}>
                <label htmlFor="domain">
                    <input type="text" id="domain" name="domain" required/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>Domain</th>
                    <th>IP</th>
                </tr>
                </thead>
                <tbody id="hasil">
                </tbody>
            </table>
        </div>
    )
}