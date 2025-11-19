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
            title: 'Avalonia 跨平台 DeskTop 模版',
            description: '—— 集成全套基础模块，支持自动生成与高效扩展\n' +
                '模板内置项目启动核心组件，通过 IncrementalGenerator 实现代码自动生成，大幅减少重复编码；深度整合 EFCore，支持多数据库适配，内置仓储模式原型，简化数据层开发；UI 层提供主题无缝切换、JSON 格式 I18n 国际化方案，并集成自定义流程图组件，满足复杂界面需求。\n' +
                '一键搭建跨平台应用基础框架，兼顾开发效率与扩展性，加速桌面应用落地。',
            technologies: ['Dotnet', 'AvaloniaUI', 'Prism.Avalonia', 'SukiUI', '.axaml', 'EFCore'],
            link: 'https://your-demo-link.com',
            image: getPublicImagePath('Avalonia.png'),
            github: 'https://github.com/your-username/ecommerce-admin',
            status: 'completed'
        },
        {
            id: 3,
            title: 'WPF DeskTop 模版',
            description: '—— 手写 Prism 架构，解锁极致灵活开发体验\n' +
                '模板基于手写 Prism 框架核心逻辑（非依赖预编译包），从容器注入、模块管理到导航机制均采用可定制化实现：\n' +
                '按需裁剪框架功能，仅保留项目必需的依赖注入、事件聚合、区域路由等核心模块，避免冗余代码。\n' +
                '支持自定义区域（Region）行为与导航规则，轻松适配复杂界面交互逻辑。\n' +
                '模块（Module）加载机制可深度扩展，灵活实现按需加载、动态插拔，适配大型应用模块化拆分。\n' +
                '软件内部数据对外开放模式，内置Garnet、Rpc服务器、共享内存通信订阅，以及多种数据库支持。' +
                '配合 WPF 数据绑定与命令系统，既能享受 Prism 架构的规范化开发优势，又能摆脱固定框架约束，让架构设计完全贴合业务场景，尤其适合需要深度定制交互逻辑或轻量化部署的项目。',
            technologies: ['.net 8.0', 'WPF', 'XPrism', 'HandyControl', 'I18n', 'EFCore', 'PgSql', 'Mysql', 'Sqlite', 'MsSql'],
            link: 'https://github.com/xioa-cn/PressMachineSystem.AutoConfigSystem',
            image: getPublicImagePath('WPF.png'),
            github: 'https://github.com/your-username/chat-app',
            status: 'completed'
        },
        {
            id: 4,
            title: 'WPF DeskTop 授权及解密模块',
            description: '—— 企业级安全防护，授权期限灵活定制\n' +
                '模块采用加密算法（AES + MD5 + Hash）构建企业级安全体系，全面保护软件知识产权。\n' +
                '支持按业务需求灵活配置授权期限，可自定义永久授权、固定时长授权、订阅式授权等多种模式，同时支持试用期限、续期规则的个性化设定。\n' +
                '集成加密解密核心功能，涵盖数据加密、密钥安全管理与授权验证流程，适配桌面级部署的安全合规要求，无需从零搭建底层安全逻辑，开箱即用且易于扩展。',
            technologies: ['AES', 'Hash', 'MD5', 'Base64'],
            image: getPublicImagePath('Auth.jpg'),
            status: 'completed'
        },
        {
            id: 5,
            title: 'WPF Naive UI 组件库',
            description: '一个 WPF 组件库',
            technologies: ['WPF', 'C#'],
            link: 'https://github.com/xioa-cn/NaiveUI.Wpf',
            image: getPublicImagePath('NaiveUI.png'),
            github: 'https://github.com/xioa-cn/NaiveUI.Wpf',
            status: 'in-progress'
        },
        {
            id: 6,
            title: 'WPF + Deepseek AI个人助手',
            description: '—— 聚焦纯粹智能对话，打造自然高效交互体验\n' +
                '基于 Deepseek 大语言模型构建，专注核心对话功能，提供流畅自然的人机交互体验。支持日常闲聊、知识问答、话题探讨等多样化对话场景',
            technologies: ['Dotnet', 'Deepseek', 'Stream', 'Http'],
            image: getPublicImagePath('Ai.png'),
            status: 'completed'
        },
        {
            id: 6,
            title: 'XMes 产线制造执行系统',
            description: '—— 聚焦工单、工艺、物料核心管理，打通产线执行全流程\n' +
                '作为面向生产车间的轻量化 MES 系统，XMes 以工单、工艺、物料为核心，实现从生产计划到成品交付的全流程数字化管控。\n' +
                '系统打通三大核心模块数据壁垒，提供生产进度可视化看板，支持生产过程实时监控与异常预警，助力企业简化管理流程、提升生产效率，适配中小制造企业的产线数字化升级需求',
            technologies: ['Asp.net Core', 'Vue 3', 'RabbitMq', 'Redis'],
            image: getPublicImagePath('XMes.png'),
            status: 'completed'
        },
        {
            id: 6,
            title: '压机曲线监控系统',
            description: '—— 实时捕捉核心参数，守护压装工艺精准与稳定\n' +
                '系统聚焦压机生产全流程，通过高精度传感器实时采集压力、位移、速度、温度等关键参数，动态生成可视化压力 - 位移 / 时间曲线，实现压装过程的透明化监控。\n' +
                '直观呈现参数变化趋势，一旦曲线偏离预设工艺范围，立即触发声光报警，快速规避质量隐患与设备过载风险。\n' +
                '自动存储全量压装数据（含时间戳、工件编号、操作员信息），支持按批次、时间范围查询回放，满足合规追溯需求。\n' +
                '基于历史曲线数据对比分析，助力优化工艺参数与设备维护计划，提升生产一致性与设备使用寿命。\n' +
                '适配伺服压机等各类机型，操作界面简洁易用，无需复杂配置即可快速落地，为精密制造场景提供高效、可靠的工艺监控解决方案。',
            technologies: ['Dotnet', 'WPF'],
            image: getPublicImagePath('Plot.png'),
            status: 'completed'
        }
    ]);


    return {
        appInformation
    }
}
