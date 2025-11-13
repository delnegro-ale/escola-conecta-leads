# Rotas da landing page  
  
Este projeto é uma aplicação **Single Page Application (SPA)** construída com React Router. As rotas são configuradas no arquivo `src/App.tsx`, e os links para cada unidade são definidos nos componentes `Footer.tsx` e `AllLocationsSection.tsx`.  
  
## Rotas das unidades  
  
- `/barra` – página da unidade Barra.  
- `/recreio` – página da unidade Recreio.  
- `/pechincha` – página da unidade Pechincha.  
  
Essas rotas devem sempre ser servidas pelo mesmo `index.html` (ou pela página de fallback `404.html`), pois o roteamento é feito no front‑end. Quando o site é publicado em um serviço estático, é necessário garantir que qualquer URL que não corresponda a um arquivo físico redirecione para `index.html` (criar o arquivo `404.html` já resolve isso no GitHub Pages).  
  
## Onde alterar as rotas  
  
- **Arquivo `src/App.tsx`** – aqui ficam declaradas as rotas do React Router:  
  
```
<Route path="/barra" element={<Barra />} />
<Route path="/recreio" element={<Recreio />} />
<Route path="/pechincha" element={<Pechincha />} />
```
  
- **Componente `Footer.tsx`** – contém os links no rodapé que apontam para cada rota:  
  
```
<Link to="/barra">Barra</Link>
<Link to="/recreio">Recreio</Link>
<Link to="/pechincha">Pechincha</Link>
```
  
- **Componente `AllLocationsSection.tsx`** – possui uma lista `locationData` com objetos que usam a chave `unit` (`"barra"`, `"recreio"` e `"pechincha"`) para definir as unidades e gerar links e dados de endereço.  
  
Se precisar mudar os caminhos ou adicionar uma nova unidade, você deve:  
  
1. Atualizar o arquivo `src/App.tsx` para incluir/alterar o `<Route path="...">`.  
2. Atualizar os componentes que geram links (como `Footer.tsx` e `AllLocationsSection.tsx`) para apontarem para o novo caminho.  
3. Certificar-se de que o serviço de hospedagem continua redirecionando URLs desconhecidas para `index.html` para que o roteamento de SPA funcione corretamente.
