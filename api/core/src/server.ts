import express, { Response, Request } from "express";

var app = express();

const enfermeiros = [
  {
    "id": 1,
    "nome": "MARIA DA SILVA",
    "formacao_id": 2
  },
  {
    "id": 2,
    "nome": "GEOVANA OLIVEIRA",
    "formacao_id": 1
  },
  {
    "id": 3,
    "nome": "JOÃO DA SILVA",
    "formacao_id": 2
  },
  {
    "id": 4,
    "nome": "CAMILA FONSECA",
    "formacao_id": 1
  },
  {
    "id": 5,
    "nome": "VITÓRIA MACHADO",
    "formacao_id": 2
  }
];

const formacoes = [
  {
    "id": 1,
    "nome": "TÉC. ENFERMAGEM",
    "nivel": "TÉCNICO"
  },
  {
    "id": 2,
    "nome": "ENFERMAGEM",
    "nivel": "SUPERIOR"
  }
];

app.get("/", function (req: Request, res: Response) {
  res.send("Bohr Express template");
});

app.get("/enfermeiros", function (req: Request, res: Response) {
  res.send(enfermeiros);
});

app.get("/enfermeiros/:enfermeiroId", function (req: Request, res: Response) {
  const enfermeiro = enfermeiros.find((enfermeiro) => enfermeiro.id === parseInt(req.params.enfermeiroId));
  res.send(enfermeiro);
});

app.get("/formacoes", function (req: Request, res: Response) {
  res.send(formacoes);
});

app.get("/formacoes/:formacaoId", function (req: Request, res: Response) {
  const formacao = formacoes.find((enfermeiro) => formacao.id === parseInt(req.params.formacaoId));
  res.send(formacao);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
