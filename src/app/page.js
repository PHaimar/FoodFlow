"use client";

import { useEffect, useState } from "react";
import Button from "../components/Button";
import Brand from "../components/Brand";

const messages = {
  login: "Tela pronta para conectar com a autenticação.",
  signup: "Tela pronta para conectar com o cadastro.",
  forgot: "Fluxo de recuperação de senha ainda não configurado."
};

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState("inicio");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function navigate(screen) {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(event, message) {
    event.preventDefault();
    setToast(message);
  }

  return (
    <main className="app">
      {currentScreen === "inicio" && (
        <section className="screen landing active" id="inicio">
          <div className="hero-photo">
            <img src="/assets/hamburguer.jpg" alt="Hambúrguer artesanal com batatas" />
            <span className="photo-caption">FOOD • FLOW</span>
          </div>

          <div className="landing-content">
            <Brand onClick={() => navigate("inicio")} />
            <div className="landing-copy">
              <h1>Sabor que chega rápido</h1>
              <p>Delícias preparadas com carinho e<br className="desktop-only" /> entregues na sua porta, sem atraso.</p>
              <Button onClick={() => navigate("cadastro")}>Começar</Button>
              <small>Peça seus pratos favoritos em poucos cliques.</small>
            </div>
          </div>
        </section>
      )}

      {currentScreen === "login" && (
        <section className="screen auth-screen active" id="login">
          <aside className="auth-intro">
            <Brand onClick={() => navigate("inicio")} />
            <div className="intro-copy">
              <h2>Sabor que chega rápido</h2>
              <p>Entre para acompanhar seus pedidos e<br className="desktop-only" /> aproveitar suas refeições favoritas.</p>
            </div>
          </aside>

          <div className="auth-stage">
            <form className="auth-card login-card" onSubmit={(event) => handleSubmit(event, messages.login)}>
              <h1>Bem-vindo!</h1>
              <p className="card-subtitle">Acesse sua conta FoodFlow</p>
              <label htmlFor="login-email">Email</label>
              <input id="login-email" name="email" type="email" placeholder="Insira seu email" required />
              <label htmlFor="login-password">Senha</label>
              <input id="login-password" name="senha" type="password" placeholder="Insira sua senha" required />
              <a className="forgot-link" href="#recuperacao" onClick={(event) => { event.preventDefault(); setToast(messages.forgot); }}>Esqueceu sua senha?</a>
              <Button type="submit" className="form-btn">Entrar</Button>
              <p className="switch-text">Ainda não tem conta? <a href="#cadastro" onClick={(event) => { event.preventDefault(); navigate("cadastro"); }}>Cadastre-se</a></p>
            </form>
          </div>
        </section>
      )}

      {currentScreen === "cadastro" && (
        <section className="screen auth-screen active" id="cadastro">
          <aside className="auth-intro signup-intro">
            <Brand onClick={() => navigate("inicio")} />
            <div className="intro-copy">
              <h2>Sua próxima refeição começa<br /> aqui.</h2>
              <p>Crie sua conta e descubra um jeito mais<br className="desktop-only" /> simples de pedir.</p>
            </div>
          </aside>

          <div className="auth-stage">
            <form className="auth-card signup-card" onSubmit={(event) => handleSubmit(event, messages.signup)}>
              <h1>Crie sua conta</h1>
              <p className="card-subtitle">É rápido e fácil começar</p>
              <label htmlFor="signup-name">Nome</label>
              <input id="signup-name" name="nome" type="text" placeholder="Insira seu nome" required />
              <label htmlFor="signup-email">Email</label>
              <input id="signup-email" name="email" type="email" placeholder="Insira seu email" required />
              <label htmlFor="signup-password">Senha</label>
              <input id="signup-password" name="senha" type="password" placeholder="Crie uma senha" minLength={6} required />
              <Button type="submit" className="form-btn">Criar conta</Button>
              <p className="switch-text">Já tem uma conta? <a href="#login" onClick={(event) => { event.preventDefault(); navigate("login"); }}>Entrar</a></p>
            </form>
          </div>
        </section>
      )}

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </main>
  );
}
