/**
 * 获取静态资源路径的工具函数
 * 考虑Vite的base配置
 */

// 获取当前的base路径
export function getAssetPath(path: string): string {
  // 如果配置了base，需要拼接路径
  const base = import.meta.env.BASE_URL || '/'
  return base.startsWith('/') ? `${base.slice(0, -1)}${path}` : `${base}${path}`
}

// 专门用于public目录下的图片
export function getPublicImagePath(imageName: string): string {
  return getAssetPath(`/${imageName}`)
}

// 检查图片是否存在
export async function checkImageExists(path: string): Promise<boolean> {
  try {
    const response = await fetch(path, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}