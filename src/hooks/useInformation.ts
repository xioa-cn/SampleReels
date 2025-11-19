import type {Project} from "../types/Project.ts";
import {ref} from "vue";
import {getPublicImagePath} from "../utils/imageHelper.ts";

export function useInformation() {
    const appInformation = ref<Project[]>([
        {
            id: 1,
            title: 'SampleReels',
            description: '个人作品集展示网站，使用Vue 3 + TypeScript构建',
            technologies: ['Vue 3', 'TypeScript', 'Vite', 'CSS3'],
            link: '#',
            image: getPublicImagePath('Sample.png'),
            github: 'https://github.com/xioa-cn/SampleReels',
            status: 'in-progress'
        },
        {
            id: 2,
            title: '电商管理系统',
            description: '全栈电商后台管理系统，包含商品管理、订单处理、用户管理等完整功能模块',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
            link: 'https://your-demo-link.com',
            image: getPublicImagePath('Sample.png'),
            github: 'https://github.com/your-username/ecommerce-admin',
            status: 'completed'
        },
        {
            id: 3,
            title: '实时聊天应用',
            description: '基于WebSocket的实时聊天应用，支持群聊、私聊、文件传输等功能',
            technologies: ['Vue 3', 'Socket.io', 'Node.js', 'Redis'],
            link: 'https://your-demo-link.com',
            github: 'https://github.com/your-username/chat-app',
            status: 'in-progress'
        },
        {
            id: 4,
            title: '数据可视化平台',
            description: '企业级数据分析和可视化平台，提供丰富的图表组件和数据展示方案',
            technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
            github: 'https://github.com/your-username/data-viz-platform',
            status: 'planned'
        },
        {
            id: 5,
            title: '移动端天气App',
            description: '跨平台移动应用，提供实时天气信息、预报和空气质量监测',
            technologies: ['React Native', 'TypeScript', 'Redux', 'Weather API'],
            link: 'https://your-demo-link.com',
            github: 'https://github.com/your-username/weather-app',
            status: 'completed'
        },
        {
            id: 6,
            title: 'AI智能助手',
            description: '基于大语言模型的智能对话助手，集成多种AI服务和功能模块',
            technologies: ['Python', 'FastAPI', 'OpenAI API', 'Vue 3', 'WebSocket'],
            link: 'https://your-demo-link.com',
            github: 'https://github.com/your-username/ai-assistant',
            status: 'in-progress'
        }
    ]);


    return {
        appInformation
    }
}
