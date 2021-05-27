import platform from 'platform';

export default function userAgent(triggered: Function) {
  const device = platform.product || platform.manufacturer || platform.os?.family || platform.name || 'web';
  triggered(`${device?.toLowerCase()} is`);
}
