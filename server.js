const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para validar cabeceras: usuario, clave, token y Content-Type
app.use((req, res, next) => {
  const user = req.headers['usuario'];
  const pass = req.headers['clave'];
  const token = req.headers['x-token'];
  const contentType = req.headers['content-type'];

  // Validación
  if (
    user === 'javier' &&
    pass === 'j123456' &&
    token === 'mi_token_123' &&
    contentType === 'application/json'
  ) {
    next(); // acceso permitido
  } else {
    res.status(401).json({
      error: 'No autorizado',
      detalles: {
        usuario: user === 'javier',
        clave: pass === 'j123456',
        token: token === 'mi_token_123',
        contentTypeCorrecto: contentType === 'application/json'
      }
    });
  }
});

// Endpoint JSON
app.get('/api/clientes', (req, res) => {
  res.json([
    {
      CodCliente: "001",
      NombreCliente: "Cliente Alpha",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 12500.00,
      TotalAlbaran: 12200.00
    },
    {
      CodCliente: "002",
      NombreCliente: "Cliente Beta",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 8300.50,
      TotalAlbaran: 7900.50
    },
    {
      CodCliente: "003",
      NombreCliente: "Cliente Gamma",
      Ano: 2025,
      Mes: 7,
      TotalPedido: 14200.00,
      TotalAlbaran: 14000.00
    },
    {
      CodCliente: "004",
      NombreCliente: "Cliente Gamma",
      Ano: 2025,
      Mes: 8,
      TotalPedido: 20200.00,
      TotalAlbaran: 20000.00
    },
    {
      CodCliente: "005",
      NombreCliente: "Cliente Gamma",
      Ano: 2025,
      Mes: 8,
      TotalPedido: 20200.00,
      TotalAlbaran: 20000.00
    }
  ]);
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en puerto ${port}`);
});
