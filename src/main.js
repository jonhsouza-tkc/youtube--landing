// Dados dos videos
const videos = [
            { title: "Curso Completo de Tailwind CSS - Do Zero ao Avançado", channel: "Tech Channel", views: "125 mil", time: "há 2 dias", duration: "10:25", color: "red", isLive: false },
            { title: "Live Coding: Criando um Dashboard com React e TypeScript", channel: "Code Academy", views: "3,2 mil", time: "agora", duration: "25:47", color: "blue", isLive: true },
            { title: "UI/UX Design Trends 2025 - O que está por vir?", channel: "Design Masters", views: "89 mil", time: "há 1 semana", duration: "15:30", color: "green", isLive: false },
            { title: "JavaScript Avançado: Promises, Async/Await e Event Loop", channel: "Dev Pro", views: "230 mil", time: "há 3 dias", duration: "45:12", color: "purple", isLive: false },
            { title: "5 Extensões VS Code que Todo Dev Precisa Conhecer", channel: "Dicas Dev", views: "45 mil", time: "há 5 horas", duration: "8:45", color: "yellow", isLive: false },
            { title: "Deploy de Aplicações Node.js na AWS - Tutorial Completo", channel: "Cloud Masters", views: "156 mil", time: "há 2 semanas", duration: "32:18", color: "pink", isLive: false },
            { title: "Git e GitHub na Prática - Workflow Profissional", channel: "Dev Tools", views: "320 mil", time: "há 1 mês", duration: "18:30", color: "indigo", isLive: false },
            { title: "CSS Grid vs Flexbox - Quando usar cada um?", channel: "Frontend Basics", views: "78 mil", time: "há 4 dias", duration: "22:45", color: "orange", isLive: false },
            { title: "Next.js 14 - As Novidades que Você Precisa Saber", channel: "React Brasil", views: "190 mil", time: "há 1 semana", duration: "12:30", color: "teal", isLive: false },
            { title: "MongoDB vs PostgreSQL - Qual Banco Escolher?", channel: "Database Pro", views: "410 mil", time: "há 3 semanas", duration: "28:15", color: "cyan", isLive: false },
            { title: "Arquitetura de Microsserviços com Node.js - Curso Completo", channel: "Backend Masters", views: "520 mil", time: "há 2 meses", duration: "55:30", color: "lime", isLive: false },
            { title: "TypeScript Tips & Tricks - Produtividade no Próximo Nível", channel: "TS Brasil", views: "145 mil", time: "há 6 dias", duration: "19:45", color: "rose", isLive: false }
        ];

        // Renderização dos vídeos

        const container = document.getElementById('videos');

        videos.forEach((video, i) => {
            const videoCard = document.createElement('article');
            videoCard.className = 'cursor-pointer';
            videoCard.innerHTML = `
                <div class="relative bg-gray-200 rounded-xl overflow-hidden">
                    <img src="https://picsum.photos/320/180?random=${i + 1}" alt="${video.title}" class="w-full h-full object-cover">
                    <span class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">${video.duration}</span>
                    ${video.isLive ? '<span class="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded uppercase font-semibold">Ao vivo</span>' : ''}
                </div>
                <div class="flex gap-3 mt-3">
                    <div>
                        <h3 class="font-medium text-sm line-clamp-2">${video.title}</h3>
                        <p class="text-sm text-gray-600 mt-1">${video.channel}</p>
                        <p class="text-sm text-gray-600">${video.isLive ? `${video.views} assistindo ${video.time}` : `${video.views} visualizações • ${video.time}`}</p>
                    </div>
                </div>
            `;
            container.appendChild(videoCard); 
        });