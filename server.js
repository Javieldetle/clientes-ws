const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/clientes', (req, res) => {
  res.json([
    {
      CodCliente: "C001",
      NombreCliente: "Cliente Alpha",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 12500.00,
      TotalAlbaran: 12200.00
    },
    {
      CodCliente: "C002",
      NombreCliente: "Cliente Beta",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 8300.50,
      TotalAlbaran: 7900.50
    },
    {
      CodCliente: "C003",
      NombreCliente: "Cliente Gamma",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 14200.00,
      TotalAlbaran: 14000.00
    }
  ]);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en puerto ${port}`);
});
