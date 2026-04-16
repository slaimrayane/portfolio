export const portfolioData = {
  personalInfo: {
    fullName: 'Slaim Rayane',
    title: 'Étudiant en Informatique - MIAGE',
    bio: "Étudiant en informatique à Paris Dauphine - PSL, spécialisé en systèmes d'information, data et développement logiciel. J'ai une expérience concrète en développement full-stack, en data engineering et en projets IA.",
    objective:
      'Je recherche une alternance pour le Master MIAGE à Dauphine à partir de septembre 2026.',
    location: 'Paris, France',
    email: 'slaim.rayn@gmail.com',
    profilePicture: '/assets/profile.jpg',
    cv: '/assets/cv-alternance.pdf',
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/in/rayane-slaim',
    github: 'https://github.com/slaimrayane',
  },
  projects: [
    {
      name: 'JOBO - Application mobile d orientation professionnelle',
      description:
        'Application mobile intelligente permettant de recommander des parcours professionnels personnalisés grâce à l IA, avec un système de recommandation en temps réel.',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'Gemini API'],
      features: [
        'Recommandations personnalisées',
        'API REST',
        'Gestion des utilisateurs',
        'Suivi des performances et KPIs',
      ],
      github: 'https://github.com/slaimrayane/JOBO',
      demo: '',
      role: 'Développement full-stack et pilotage complet du projet (de la conception au déploiement)',
    },
    {
      name: 'Moteur de recherche IA (RAG)',
      description:
        'Système de recherche basé sur l IA permettant d interroger efficacement de grandes quantités de documents via un pipeline de traitement et d indexation avancé.',
      technologies: ['Python', 'FAISS', 'Streamlit', 'Google GenAI API'],
      features: [
        'Indexation de 1000+ fichiers',
        'Recherche rapide optimisée (-95% de temps)',
        'Dashboard de suivi des performances',
      ],
      github: 'https://github.com/slaimrayane/search_engine_prototype',
      demo: '',
      role: 'Développement du pipeline data et implémentation du système RAG',
    },
    {
      name: 'GestionBudgetsVille - Optimisation en Java',
      description:
        'Application d optimisation multi-contraintes permettant de sélectionner les meilleurs projets sous contraintes budgétaires grâce à des algorithmes avancés.',
      technologies: ['Java', 'Algorithmique', 'Tests unitaires'],
      features: [
        'Heuristiques gloutonnes',
        'Hill Climbing',
        'Modélisation orientée objet',
        'Tests unitaires',
      ],
      github: 'https://github.com/slaimrayane/GestionBudgetsVille',
      demo: '',
      role: 'Conception et développement des algorithmes d optimisation',
    },
    {
      name: 'Digital Product Passport (DPP) - Projet LV Neo',
      description:
        'Projet universitaire en partenariat avec Louis Vuitton portant sur la traçabilité des produits et la gestion des données dans un système d information complexe.',
      technologies: ['Analyse fonctionnelle', 'Gestion de projet', 'Systèmes d information'],
      features: ['Rédaction SFG/SFD', 'Cartographie des flux de données', 'Coordination projet'],
      github: '',
      demo: '',
      role: 'Analyse fonctionnelle et contribution à la conception du système',
    },
  ],
  education: [
    {
      school: 'Paris Dauphine - PSL',
      degree: 'Licence MIAGE (Informatique & Systèmes d Information)',
      dates: '2025 - Présent',
      description:
        'Formation en algorithmique, bases de données, systèmes d information, data et gestion de projet.',
    },
    {
      school: 'Université Paris Cité',
      degree: 'Licence (L2) en informatique',
      dates: 'Sept 2024 - Mai 2025',
      description:
        'Cours pertinents : Algorithmes et structures de données, Systèmes d exploitation, Programmation orientée objet (Java), Bases de données, Réseaux informatiques, Génie logiciel, Probabilités et statistiques.',
    },
  ],
  experience: [
    {
      company: 'Groupe Cevital',
      role: 'Stagiaire Développeur',
      duration: 'Juillet 2023',
      responsibilities:
        'Développement et maintenance d un ERP, analyse des besoins métier, rédaction de documentation technique, participation aux rituels Agile/Scrum.',
      achievements:
        'Rédaction de procédures ayant permis de réduire le temps d intégration de 30%.',
    },
  ],
  certifications: [
    {
      name: 'Data Analyst Associate Certificate',
      organization: 'DataCamp',
      date: '2025',
      link: 'https://www.datacamp.com/certificate/DAA0012062162177',
    },
    {
      name: 'Excel Fundamentals',
      organization: 'DataCamp',
      date: '2025',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/e1a4efb7aebeef329534d269f2f46509ba97dbb6',
    },
    {
      name: 'Machine Learning Specialization',
      organization: 'Coursera - DeepLearning.AI / Stanford',
      date: 'Septembre 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/LGZEXM6PCJZG',
    },
  ],
  skills: {
    technical: [
      'Java',
      'Python',
      'JavaScript',
      'React Native',
      'Node.js / Express',
      'MongoDB',
      'SQL',
      'FAISS',
      'Streamlit',
      'Power BI',
      'Git / GitHub',
    ],
    soft: ['Travail en équipe', 'Communication', 'Adaptabilité', 'Gestion de projet', 'Résolution de problèmes'],
    languages: ['Français (courant)', 'Anglais (courant)', 'Arabe (natif)'],
  },
}

export const techFilters = ['Tous', 'JavaScript', 'Python', 'Java', 'Data', 'Mobile']
