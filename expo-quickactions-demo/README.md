# Expo Router + TypeScript + Ações Rápidas (Demo)

Este é um projeto **Expo** minimalista que demonstra:

- Uso do **Expo Router** (navegação baseada em arquivos)
- **Navegação por abas** com três telas
- Configuração básica para **Ações Rápidas (Quick Actions)** utilizando o pacote `expo-quick-actions`
- Estrutura limpa com **TypeScript** e boas práticas de organização

---

## 🧭 Visão geral do projeto

O aplicativo possui três telas acessadas por abas na parte inferior:
- **Home**
- **Profile**
- **Settings**

Cada tela exibe apenas o nome centralizado, conforme solicitado.

O hook `useQuickActions` é responsável por lidar com *deep links* e abrir a tela correta quando o aplicativo é iniciado por um atalho (ação rápida).

---

## ⚙️ Estrutura de pastas

```
expo-quickactions-demo/
│
├── app/
│   ├── _layout.tsx              # Layout raiz (Stack principal)
│   └── (tabs)/                  # Grupo de abas (Tab Navigation)
│       ├── _layout.tsx          # Layout das abas
│       ├── home.tsx             # Tela Home
│       ├── profile.tsx          # Tela Profile
│       └── settings.tsx         # Tela Settings
│
├── hooks/
│   └── useQuickActions.tsx      # Hook que trata as ações rápidas e deep links
│
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

---

## 🚀 Como executar o projeto

1. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

2. **Inicie o projeto**
   ```bash
   npm start
   ```

3. **Abra no seu dispositivo** com o app **Expo Go** (via QR Code)

> ⚠️ As ações rápidas (Quick Actions) **só funcionam em builds nativos**, pois exigem configuração no código nativo.  
> Para utilizá-las, é necessário compilar o app usando **EAS Build** ou um **Custom Dev Client**.

---

## 📱 O que são "Ações Rápidas"

As **Ações Rápidas** permitem adicionar atalhos no ícone do aplicativo (pressionando e segurando o ícone).  
Cada atalho pode abrir o app diretamente em uma tela específica — por exemplo, abrir a aba *Profile*.

O pacote [`expo-quick-actions`](https://github.com/EvanBacon/expo-quick-actions) realiza essa configuração, criando os atalhos nativos (no Info.plist e AndroidManifest.xml) durante o build.

---

## 🧩 Boas práticas aplicadas

- **Componentização** das telas e hooks
- **TypeScript** para melhor legibilidade e tipagem
- **Expo Router** com estrutura `(tabs)` para navegação clara
- **Hook de inicialização** (`useQuickActions`) para tratar *deep links*
- Código simples, limpo e fácil de entender

---

## 📚 Referências úteis

- [Documentação do Expo Router](https://docs.expo.dev/router/introduction/)
- [expo-quick-actions (GitHub)](https://github.com/EvanBacon/expo-quick-actions)
- [Artigo do Expo sobre plugins de configuração](https://docs.expo.dev/config-plugins/introduction/)
- [Deep Linking com Expo](https://docs.expo.dev/guides/deep-linking/)


