/**
 * ============================================================================
 * DADOS DO PORTFÓLIO — ÍCARO REZENDE (icarorezende.com)
 * ============================================================================
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Ícaro Rezende",
    domain: "icarorezende.com",
    website: "https://icarorezende.com",
    location: "Salvador, BA (Remoto)",
    role: "Gestão de Transformação Digital & Infraestrutura",
    email: "contato@icarorezende.com",
    linkedin: "https://linkedin.com/in/icarorezende",
    github: "https://github.com/icarorezende"
  },

  stackItems: [
    {
      name: "Ansible AAP/AWX & Terraform",
      category: "automacao-containers",
      domain: "IaC & Automação",
      description: "Esteiras de automação e Infraestrutura como Código padronizando provisionamento e eliminando débitos técnicos.",
      tags: ["Ansible AAP/AWX", "Terraform", "IaC", "DevOps"]
    },
    {
      name: "OpenShift, Rancher & Kubernetes",
      category: "automacao-containers",
      domain: "Orquestração Cloud-Native",
      description: "Clusters corporativos de alta disponibilidade, governança multi-cluster e suporte a microsserviços.",
      tags: ["Red Hat OpenShift", "SUSE Rancher", "Kubernetes", "HA"]
    },
    {
      name: "AIaaS & Modelos Locais (LLMs)",
      category: "automacao-containers",
      domain: "Inteligência Artificial Local",
      description: "Arquitetura para IA como Serviço e inferência local de modelos com soberania de dados e conformidade LGPD.",
      tags: ["AIaaS", "Local LLMs", "Soberania de Dados"]
    },
    {
      name: "Docker & Podman",
      category: "automacao-containers",
      domain: "Containers & Runtime",
      description: "Padronização de imagens corporativas, execução rootless segura e integração a pipelines CI/CD.",
      tags: ["Docker", "Podman", "Rootless", "CI/CD"]
    },
    {
      name: "VMware vSphere & Proxmox VE",
      category: "infra-cloud",
      domain: "Virtualização Enterprise",
      description: "Administração e consolidação de clusters de grande porte suportando bancos de dados e sistemas de missão crítica.",
      tags: ["VMware vSphere", "Proxmox VE", "HA/DRS"]
    },
    {
      name: "Multicloud (AWS, GCP, OCI)",
      category: "infra-cloud",
      domain: "Nuvem Pública & Híbrida",
      description: "Arquitetura de soluções em nuvem combinando AWS (Certified), Google Cloud e Oracle Cloud.",
      tags: ["AWS Certified", "GCP", "OCI"]
    },
    {
      name: "Linux Enterprise & Windows Server",
      category: "infra-cloud",
      domain: "Sistemas Operacionais",
      description: "Sustentação de parques heterogêneos Linux (RHEL/Debian/Ubuntu) e Windows Server / Active Directory.",
      tags: ["RHEL", "Debian", "Windows Server", "AD"]
    },
    {
      name: "Redes Corporativas & Firewalls",
      category: "infra-cloud",
      domain: "Conectividade & Borda",
      description: "Segmentação de rede, interconexão segura via VPNs e proteção de borda com firewalls.",
      tags: ["Firewalls", "VPN", "LAN/WAN"]
    },
    {
      name: "IAM & Active Directory",
      category: "security-grc",
      domain: "Identidade & Acessos",
      description: "Governança de identidades, controle de privilégios mínimos (RBAC) e proteção de acessos corporativos.",
      tags: ["IAM", "Active Directory", "RBAC"]
    },
    {
      name: "Cyber Security & CIS Controls",
      category: "security-grc",
      domain: "Defesa & Resposta",
      description: "Hardening alinhado ao framework CIS Controls, resposta a incidentes e análise de causa raiz (RCA).",
      tags: ["CIS Controls", "Hardening", "Incident Response"]
    },
    {
      name: "Governança GRC & LGPD",
      category: "security-grc",
      domain: "Compliance Regulatório",
      description: "Gestão operacional sob práticas ITIL e COBIT com foco em Direito Digital e Proteção de Dados.",
      tags: ["ITIL", "COBIT", "LGPD", "Compliance"]
    },
    {
      name: "SRE, DRP/BCP & Agile (Scrum)",
      category: "security-grc",
      domain: "Resiliência & Liderança",
      description: "Engenharia de confiabilidade (SRE), planos de continuidade/recuperação de desastres e gestão ágil.",
      tags: ["SRE", "DRP/BCP", "Agile / Scrum", "Observabilidade"]
    }
  ],

  projects: [
    {
      title: "Transformação Digital & IaC em Larga Escala",
      category: "automacao-containers",
      categoryLabel: "Automação & IaC",
      summary: "Modernização de operações com Ansible AAP/AWX e Terraform para provisionamento padronizado de centenas de servidores.",
      outcomes: [
        "Redução expressiva no tempo de provisionamento e eliminação de inconsistências de configuração.",
        "Padronização de deploy integrada a clusters Kubernetes (Rancher/OpenShift) e containers (Docker/Podman).",
        "Condução técnica e gestão de squads multidisciplinares utilizando práticas DevOps, SRE e Scrum."
      ],
      techs: ["Ansible AAP/AWX", "Terraform", "OpenShift", "Rancher", "DevOps"]
    },
    {
      title: "Arquitetura Local para AIaaS & Modelos LLMs",
      category: "automacao-containers",
      categoryLabel: "AIaaS & Inovação",
      summary: "Planejamento e estruturação de ambiente computacional dedicado para Inteligência Artificial como Serviço on-premises.",
      outcomes: [
        "Sustentação e inferência de modelos locais de linguagem (LLMs) com isolamento e alta performance.",
        "Garantia de soberania de dados institucionais e conformidade estrita com a LGPD.",
        "Infraestrutura conteinerizada pronta para atender múltiplos serviços digitais."
      ],
      techs: ["AIaaS", "Local LLMs", "Kubernetes", "LGPD"]
    },
    {
      title: "Consolidação de Clusters Críticos & Multicloud",
      category: "infra-cloud",
      categoryLabel: "Virtualização & Cloud",
      summary: "Sustentação de clusters VMware vSphere de missão crítica e estratégia multicloud com AWS, GCP e OCI.",
      outcomes: [
        "Alta disponibilidade contínua para bancos de dados e sistemas essenciais corporativos.",
        "Consolidação de ambientes legados (VMware/Proxmox) com otimização de custos e planos de contingência (DRP).",
        "Integração segura com provedores públicos de nuvem para cargas híbridas."
      ],
      techs: ["VMware vSphere", "Proxmox VE", "AWS", "GCP", "OCI"]
    },
    {
      title: "Cyber Security, CIS Controls & Governança GRC",
      category: "security-grc",
      categoryLabel: "Segurança & Compliance",
      summary: "Implementação de barreiras operacionais, controle de identidades (IAM) e alinhamento a frameworks de conformidade.",
      outcomes: [
        "Hardening de infraestrutura alinhado ao framework CIS Controls e resposta estruturada a incidentes (RCA).",
        "Alinhamento operacional entre governança de TI (ITIL/COBIT) e requisitos da LGPD.",
        "Estruturação de políticas de segurança, monitoramento contínuo (SIEM) e testes de continuidade (BCP)."
      ],
      techs: ["CIS Controls", "IAM", "Cyber Security", "ITIL", "LGPD"]
    }
  ]
};

function renderStack(filterCategory = "all") {
  const container = document.getElementById("stack-grid-container");
  if (!container) return;

  const filtered = filterCategory === "all"
    ? PORTFOLIO_DATA.stackItems
    : PORTFOLIO_DATA.stackItems.filter((item) => item.category === filterCategory);

  container.innerHTML = filtered
    .map(
      (item, index) => `
      <article class="stack-card" id="stack-card-${index}">
        <div>
          <div class="stack-card-top">
            <h3 class="stack-name">${item.name}</h3>
            <span class="stack-domain">${item.domain}</span>
          </div>
          <p class="stack-role-desc" style="margin-top: 0.45rem;">${item.description}</p>
        </div>
        <div class="stack-tags">
          ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = filterCategory === "all"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((item) => item.category === filterCategory);

  container.innerHTML = filtered
    .map(
      (project, index) => `
      <article class="project-card" id="project-card-${index}">
        <div>
          <span class="project-category">${project.categoryLabel}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <ul class="project-outcomes">
            ${project.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}
          </ul>
        </div>
        <div class="project-footer">
          ${project.techs.map((tech) => `<span class="tag">${tech}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function setupFilters() {
  const stackFilterBtns = document.querySelectorAll("[data-stack-filter]");
  stackFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      stackFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderStack(btn.getAttribute("data-stack-filter"));
    });
  });

  const projectFilterBtns = document.querySelectorAll("[data-project-filter]");
  projectFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-project-filter"));
    });
  });
}

function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem("icarorezende_theme_pref") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("icarorezende_theme_pref", next);
  });
}

function setupInteractions() {
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle-btn");
  const mainNav = document.getElementById("main-navigation");

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const copyEmailBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("copy-toast");

  if (copyEmailBtn && toast) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
        toast.textContent = `E-mail copiado: ${PORTFOLIO_DATA.profile.email}`;
        toast.classList.add("visible");
        setTimeout(() => {
          toast.classList.remove("visible");
        }, 2500);
      } catch {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
      }
    });
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderStack("all");
  renderProjects("all");
  setupFilters();
  setupThemeToggle();
  setupInteractions();
});
