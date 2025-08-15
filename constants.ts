
import type { Level } from './types';

export const LEVELS: Level[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const COMMANDS: Record<Level, string[]> = {
  'Beginner': [
    'pwd', 'ls', 'cd', 'mkdir', 'rmdir', 'touch', 'cp', 'mv', 'rm', 'cat', 'echo', 'man', 'clear', 'history', 'whoami', 'date', 'cal', 'uname', 'head', 'tail', 'less', 'file', 'wc', 'sort', 'uniq', 'which', 'alias', 'unalias', 'exit', 'uptime'
  ],
  'Intermediate': [
    'find', 'grep', 'locate', 'df', 'du', 'top', 'ps', 'kill', 'killall', 'chmod', 'chown', 'tar', 'unzip', 'scp', 'wget', 'curl', 'nano', 'vi', 'env', 'export', 'ping', 'traceroute', 'ifconfig', 'ip', 'mount', 'umount', 'free', 'hostname', 'hostnamectl'
  ],
  'Advanced': [
    'netstat', 'ss', 'iptables', 'ufw', 'nmap', 'htop', 'vmstat', 'lsof', 'rsync', 'awk', 'sed', 'cron', 'at', 'journalctl', 'tcpdump', 'strace', 'nc', 'dig', 'whois', 'iptables-save', 'systemctl', 'service', 'dmesg', 'lsblk', 'blkid', 'fdisk', 'parted', 'sar', 'iostat', 'ethtool'
  ],
  'Expert': [
    'strings', 'xargs', 'tee', 'yes', 'watch', 'tree', 'basename', 'dirname', 'split', 'join', 'cut', 'paste', 'cmp', 'diff', 'comm', 'md5sum', 'sha256sum', 'base64', 'hexdump', 'od', 'lshw', 'lscpu', 'lsusb', 'lspci', 'nmcli', 'ssh', 'ssh-keygen', 'ssh-copy-id', 'zip', 'gzip', 'gunzip', 'bzip2', 'bunzip2', 'xz', 'unxz', 'stat', 'time', 'fg', 'bg', 'jobs', 'disown', 'nohup', 'screen', 'tmux', 'dd', 'mkfs', 'fsck'
  ]
};