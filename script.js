/**
 * ============================================================================
 * DADOS DO PORTFÓLIO — ÍCARO REZENDE (icarorezende.com)
 * Baseado no currículo oficial de Ícaro Rezende.
 * ============================================================================
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Ícaro Rezende",
    handle: "@icarorezende",
    domain: "icarorezende.com",
    website: "https://icarorezende.com",
    location: "Salvador, BA, Brasil (Disponibilidade Remota)",
    role: "Tech Lead de Transformação Digital & Infraestrutura | IAM & AIaaS | Cyber Security, Resiliência & Compliance",
    email: "contato@icarorezende.com",
    linkedin: "https://linkedin.com/in/icarorezende",
    github: "https://github.com/icarorezende"
  },

  stackItems: [
    {
      name: "IaC: Ansible AAP/AWX & Terraform",
      category: "automacao-containers",
      domain: "Automação & DevOps",
      description: "Desenvolvimento e implantação de esteiras de automação e Infraestrutura como Código, padronizando configurações e reduzindo o tempo de provisionamento de centenas de servidores.",
      tags: ["Ansible AAP/AWX", "Terraform", "IaC", "DevOps"]
    },
    {
      name: "AIaaS & Infraestrutura para LLMs",
      category: "automacao-containers",
      domain: "Inteligência Artificial Local",
      description: "Planejamento e arquitetura computacional voltada à implementação de Inteligência Artificial como Serviço (AIaaS) e sustentação de modelos locais (LLMs) com soberania de dados.",
      tags: ["AIaaS", "Local LLMs", "Arquitetura IA", "Soberania de Dados"]
    },
    {
      name: "Kubernetes: Rancher & OpenShift",
      category: "automacao-containers",
      domain: "Orquestração Cloud-Native",
      description: "Orquestração corporativa de microsserviços e containers em clusters de alta disponibilidade utilizando Red Hat OpenShift e SUSE Rancher.",
      tags: ["Red Hat OpenShift", "SUSE Rancher", "Kubernetes", "HA"]
    },
    {
      name: "Docker & Podman",
      category: "automacao-containers",
      domain: "Conteinerização & Runtime",
      description: "Padronização de imagens corporativas, execução segura rootless com Podman e aceleração de entregas em esteiras modernas.",
      tags: ["Docker", "Podman", "Rootless", "CI/CD"]
    },
    {
      name: "VMware vSphere & Proxmox VE",
      category: "infra-cloud",
      domain: "Virtualização Enterprise",
      description: "Administração, consolidação e evolução contínua de clusters virtualizados de grande porte suportando bancos de dados e sistemas de missão crítica.",
      tags: ["VMware vSphere", "Proxmox VE", "HA/DRS", "Consolidação"]
    },
    {
      name: "Multicloud (AWS, GCP & OCI)",
      category: "infra-cloud",
      domain: "Cloud Computing & Híbrida",
      description: "Arquitetura de soluções em nuvem pública e híbrida combinando AWS (Certified Cloud Practitioner), Google Cloud Platform (GCP) e Oracle Cloud (OCI).",
      tags: ["AWS Certified", "GCP", "OCI", "Arquitetura de Soluções"]
    },
    {
      name: "Linux Enterprise & Windows Server",
      category: "infra-cloud",
      domain: "Sistemas Operacionais Críticos",
      description: "Sustentação avançada de parques heterogêneos Linux (RHEL, Debian, Ubuntu) e Windows Server / Active Directory em operações de larga escala.",
      tags: ["RHEL / Debian / Ubuntu", "Windows Server", "Active Directory", "DNS/DHCP"]
    },
    {
      name: "Redes Corporativas, VPNs & Firewalls",
      category: "infra-cloud",
      domain: "Conectividade & Perímetro",
      description: "Projeto, implementação e sustentação de redes corporativas, interconexão segura entre unidades via VPN e proteção de borda com firewalls.",
      tags: ["Firewalls", "VPN", "LAN/WAN", "Segurança de Rede"]
    },
    {
      name: "Gestão de Identidades e Acessos (IAM)",
      category: "security-grc",
      domain: "Identidade & Zero Trust",
      description: "Governança de identidades, controle de acesso baseado em papéis (RBAC), autenticação centralizada e proteção de credenciais privilegiadas.",
      tags: ["IAM", "Active Directory", "RBAC", "Controle de Acesso"]
    },
    {
      name: "Cyber Security, Hardening & CIS Controls",
      category: "security-grc",
      domain: "Defesa & Resposta a Incidentes",
      description: "Alinhamento operacional ao framework CIS Controls, hardening de servidores, contenção de incidentes de segurança e análise de causa raiz (RCA).",
      tags: ["CIS Controls", "Hardening", "Incident Response", "RCA"]
    },
    {
      name: "Governança GRC (ITIL, COBIT) & LGPD",
      category: "security-grc",
      domain: "Compliance & Direito Digital",
      description: "Gestão de serviços e processos sob diretrizes ITIL e COBIT aliada à especialização em Direito Digital, LGPD e Proteção de Dados.",
      tags: ["ITIL", "COBIT", "LGPD", "Direito Digital"]
    },
    {
      name: "SRE, Continuidade (DRP/BCP), Agile & SIEM",
      category: "security-grc",
      domain: "Resiliência & Liderança Técnica",
      description: "Engenharia de confiabilidade (SRE), planos de recuperação de desastres (DRP/BCP), observabilidade/SIEM e liderança ágil de equipes (Scrum).",
      tags: ["SRE", "DRP / BCP", "Observabilidade & SIEM", "Agile / Scrum"]
    }
  ],

  projects: [
    {
      title: "Transformação Digital & IaC em Larga Escala (Ansible AAP/AWX & Terraform)",
      category: "automacao-containers",
      categoryLabel: "Transformação Digital & IaC • PRODEB",
      summary: "Liderança técnica na modernização de operações de infraestrutura e implantação de esteiras de Infraestrutura como Código para plataformas digitais estaduais.",
      outcomes: [
        "Desenvolvimento de automações via Ansible AAP/AWX e Terraform, reduzindo drasticamente o tempo de provisionamento de centenas de servidores.",
        "Eliminação de débitos técnicos e padronização de ambientes integrados a clusters Kubernetes (Rancher/OpenShift) e containers (Docker/Podman).",
        "Condução técnica de equipes multidisciplinares utilizando práticas DevOps, SRE e metodologias ágeis (Scrum)."
      ],
      techs: ["Ansible AAP/AWX", "Terraform", "OpenShift", "Rancher", "Docker/Podman", "DevOps"]
    },
    {
      title: "Arquitetura Local de Inteligência Artificial como Serviço (AIaaS / LLMs)",
      category: "automacao-containers",
      categoryLabel: "AIaaS & Arquitetura de Soluções • PRODEB",
      summary: "Planejamento e estruturação de infraestrutura computacional on-premises voltada ao fornecimento de Inteligência Artificial como Serviço (AIaaS).",
      outcomes: [
        "Desenho de arquitetura de soluções para sustentação de modelos locais de linguagem (LLMs) com alta performance e isolamento.",
        "Garantia de soberania tecnológica, privacidade e conformidade estrita com a LGPD no processamento de dados institucionais.",
        "Orquestração escalável preparada para múltiplos serviços digitais e cargas de trabalho modernas."
      ],
      techs: ["AIaaS", "LLMs Locais", "Arquitetura de Soluções", "Kubernetes", "LGPD"]
    },
    {
      title: "Sustentação Crítica & Consolidação de Virtualização (VMware vSphere / Proxmox & Cloud)",
      category: "infra-cloud",
      categoryLabel: "Infraestrutura Crítica & Cloud • PRODEB / VIPAC",
      summary: "Engenharia, consolidação e evolução contínua de parques de virtualização de grande porte e integração com nuvens públicas.",
      outcomes: [
        "Administração de clusters VMware vSphere de alta disponibilidade suportando bancos de dados e sistemas essenciais do Estado da Bahia.",
        "Modernização tecnológica completa e consolidação de servidores legados gerando expressiva redução de custos (TCO) e downtime zero.",
        "Arquitetura híbrida e multicloud (AWS, GCP, OCI) aliada a hipervisores corporativos (VMware vSphere e Proxmox VE)."
      ],
      techs: ["VMware vSphere", "Proxmox VE", "AWS", "GCP", "OCI", "Linux / Windows Server"]
    },
    {
      title: "Resiliência Cibernética, IAM, CIS Controls & Governança GRC (ITIL/COBIT/LGPD)",
      category: "security-grc",
      categoryLabel: "Cyber Security, IAM & Compliance • PRODEB / VIPAC",
      summary: "Estruturação de barreiras de proteção operacional, gestão de identidades, resposta a incidentes e planos de continuidade de negócios.",
      outcomes: [
        "Adequação operacional ao framework CIS Controls, governança ITIL/COBIT e diretrizes de proteção de dados (LGPD).",
        "Atuação prioritária na contenção de incidentes de segurança, investigação de causa raiz (RCA), observabilidade e SIEM.",
        "Implantação de políticas corporativas de segurança, controle de acessos (IAM) e planos de recuperação de desastres (DRP/BCP)."
      ],
      techs: ["CIS Controls", "IAM", "Cyber Security", "ITIL & COBIT", "DRP/BCP", "SIEM"]
    }
  ],

  experiences: [
    {
      role: "Consultor em Transformação Digital I (Tech Lead de Infraestrutura)",
      period: "Jan 2025 – Presente",
      organization: "Companhia de Processamento de Dados do Estado da Bahia (PRODEB)",
      highlights: [
        "Liderança técnica em projetos de modernização de infraestrutura, arquitetura de soluções e sustentação de plataformas digitais para o setor público estadual, eliminando débitos técnicos e garantindo alta disponibilidade.",
        "Desenvolvimento e implantação de esteiras de automação e Infraestrutura como Código (IaC via Ansible AAP/AWX), reduzindo o tempo de provisionamento e padronizando configurações de centenas de servidores corporativos.",
        "Condução de iniciativas orientadas a conformidade e boas práticas operacionais alinhadas ao framework CIS Controls e governança ITIL/COBIT.",
        "Planejamento e estruturação de arquitetura computacional voltada à implementação de serviços de Inteligência Artificial como Serviço (AIaaS) e sustentação de modelos locais (LLMs)."
      ]
    },
    {
      role: "Analista de TIC II",
      period: "Nov 2020 – Jan 2025 (4 anos 3 meses)",
      organization: "Companhia de Processamento de Dados do Estado da Bahia (PRODEB)",
      highlights: [
        "Sustentação e engenharia de infraestrutura corporativa de larga escala, suportando serviços essenciais da administração pública estadual.",
        "Administração e evolução contínua de cluster virtualizado VMware vSphere de alta disponibilidade, suportando bancos de dados e sistemas de missão crítica.",
        "Atuação prioritária na resposta e contenção de incidentes de segurança de TI, elaboração de relatórios de causa raiz (RCA) e implementação de barreiras de proteção operacional."
      ]
    },
    {
      role: "Coordenador de TI",
      period: "Dez 2013 – Jan 2019 (5 anos 2 meses)",
      organization: "VIPAC Segurança e Vigilância LTDA",
      highlights: [
        "Gestão integral da área de Tecnologia da Informação, liderando infraestrutura de rede, servidores, telecomunicações e suporte ao negócio sob diretrizes ITIL.",
        "Modernização completa do parque tecnológico e consolidação de servidores legados através de virtualização VMware, gerando expressiva redução de custos operacionais e downtime zero.",
        "Gestão de orçamento de TI, negociação com fornecedores, aquisição estratégica de ativos tecnológicos e estruturação de políticas corporativas de segurança e planos de recuperação de desastres (DRP/Backups).",
        "Administração de sistemas corporativos: TOTVS Protheus, Domínio Contábil e GesOper."
      ]
    },
    {
      role: "Professor de Ensino Técnico Profissionalizante",
      period: "Out 2015 – Dez 2017 (2 anos 3 meses)",
      organization: "Colégio Estadual de Aplicação Anísio Teixeira",
      highlights: [
        "Docência e desenvolvimento de conteúdos programáticos práticos nas disciplinas de Sistemas Operacionais (Linux/Windows Server), Redes de Computadores, Segurança da Informação e Algoritmos.",
        "Mentoria técnica de estudantes em projetos integradores práticos com foco em resolução estruturada de problemas corporativos."
      ]
    },
    {
      role: "Administrador de Rede e Sistemas Operacionais",
      period: "Dez 2011 – Out 2012 (11 meses)",
      organization: "TENACE Engenharia e Consultoria",
      highlights: [
        "Projeto, implementação e sustentação de redes corporativas e VPNs seguras interligando canteiros remotos e matriz de engenharia.",
        "Administração de serviços Linux críticos (DNS, DHCP, firewall, inventário automatizado e rotinas de backup para recuperação de desastres)."
      ]
    },
    {
      role: "Administrador de Rede",
      period: "Ago 2010 – Nov 2011 (1 ano 4 meses)",
      organization: "CONDER - Companhia de Desenvolvimento Urbano do Estado da Bahia",
      highlights: [
        "Sustentação e expansão de infraestrutura de rede e servidores corporativos físicos e virtualizados (VMware, Linux e Windows Server).",
        "Estruturação e implantação de catálogo de serviços e governança operacional alinhada aos fundamentos da ITIL."
      ]
    },
    {
      role: "Analista de Suporte Pleno",
      period: "Jan 2008 – Jun 2010 (2 anos 6 meses)",
      organization: "Eurovia Veículos S/A",
      highlights: [
        "Operação, sustentação de estabilidade e suporte técnico avançado do ambiente de TIC e dos sistemas centrais do grupo automotivo.",
        "Sustentação de ERP corporativo (DealerNet), diagnóstico de redes locais (LAN, DHCP, DNS, roteamento) e execução de planos de contingência."
      ]
    }
  ],

  credentials: [
    {
      type: "Formação Acadêmica • Pós-Graduação (2026)",
      title: "Pós-Graduação em Direito Digital, LGPD e Prática em Proteção de Dados",
      detail: "Faculdade i9 Educação"
    },
    {
      type: "Formação Acadêmica • Especialização (2011 – 2012)",
      title: "Especialização em Qualidade e Governança de TI",
      detail: "Centro Universitário Jorge Amado (UNIJORGE)"
    },
    {
      type: "Formação Acadêmica • Graduação (2006 – 2008)",
      title: "Tecnólogo em Redes de Computadores",
      detail: "Centro Universitário Jorge Amado (UNIJORGE)"
    },
    {
      type: "Certificação Oficial • Cloud Computing",
      title: "AWS Certified Cloud Practitioner",
      detail: "Amazon Web Services (AWS) — Credly"
    },
    {
      type: "Certificação & Licença • Proteção de Dados",
      title: "Direitos Fundamentais no Mundo Digital (LGPD)",
      detail: "Faculdade i9 Educação — Credencial: 3GSqRFTnhkvX9h7KNXO7"
    },
    {
      type: "Certificação & Licença • Direito Digital",
      title: "A Tecnologia e o Direito",
      detail: "Faculdade i9 Educação — Credencial: bnHLrQXLY1x9oQa5gUmN"
    }
  ]
};

/**
 * Renderiza os cards de Tech Stack com suporte a filtro por categoria
 */
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
          <p class="stack-role-desc" style="margin-top: 0.55rem;">${item.description}</p>
        </div>
        <div class="stack-tags">
          ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

/**
 * Renderiza os cards de Projetos / Iniciativas com suporte a filtro
 */
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

/**
 * Renderiza Experiência Profissional e Formação/Credenciais
 */
function renderCareer() {
  const timelineContainer = document.getElementById("timeline-container");
  const credentialsContainer = document.getElementById("credentials-container");

  if (timelineContainer) {
    timelineContainer.innerHTML = PORTFOLIO_DATA.experiences
      .map(
        (exp, index) => `
        <article class="timeline-item" id="experience-item-${index}">
          <div class="timeline-header">
            <h4 class="timeline-role">${exp.role}</h4>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-org">${exp.organization}</div>
          <ul class="timeline-highlights">
            ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
        </article>
      `
      )
      .join("");
  }

  if (credentialsContainer) {
    credentialsContainer.innerHTML = PORTFOLIO_DATA.credentials
      .map(
        (cred, index) => `
        <article class="credential-card" id="credential-item-${index}">
          <span class="credential-type">${cred.type}</span>
          <h4 class="credential-title">${cred.title}</h4>
          <p class="credential-detail">${cred.detail}</p>
        </article>
      `
      )
      .join("");
  }
}

/**
 * Configura filtros interativos
 */
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

/**
 * Alternância de Tema (Claro como padrão / Escuro opcional)
 */
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

/**
 * Menu Mobile e Cópia de E-mail
 */
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
        }, 2800);
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
  renderCareer();
  setupFilters();
  setupThemeToggle();
  setupInteractions();
});
