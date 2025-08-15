
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const sections = [
  {
    title: 'Section 1: Foundation & Orientation',
    content: (
      <>
        <h4>What is Linux?</h4>
        <ul>
          <li>Linux = Kernel + GNU tools + Apps.</li>
          <li>Runs on: servers, desktops, IoT, cloud.</li>
          <li>Open source, secure, customizable.</li>
        </ul>
        <h4 className="mt-4">Choosing a Distro</h4>
        <ul>
          <li><strong>Beginner:</strong> Ubuntu, Mint, Zorin, Fedora Workstation</li>
          <li><strong>Intermediate:</strong> Debian, Fedora Server, openSUSE Leap</li>
          <li><strong>Advanced:</strong> Arch, Gentoo, Slackware</li>
          <li><strong>Enterprise:</strong> RHEL, SLES, Oracle Linux</li>
          <li><strong>Specialized:</strong> Kali (pentest), Alpine (minimal), Raspberry Pi OS</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Section 2: Installing Popular Distros',
    content: (
      <>
        <h5>Ubuntu (Beginner)</h5>
        <ol>
          <li>Download ISO: ubuntu.com/download</li>
          <li>Make bootable USB (Rufus, BalenaEtcher).</li>
          <li>Boot → “Install Ubuntu”.</li>
          <li>Choose language, keyboard.</li>
          <li>Select “Install alongside” or “Erase disk”.</li>
          <li>Create user & password.</li>
          <li>Reboot.</li>
        </ol>

        <h5 className="mt-4">Linux Mint (Beginner)</h5>
        <ol>
          <li>Download ISO: linuxmint.com/download.php</li>
          <li>Make USB (Rufus/Etcher).</li>
          <li>Boot & select “Install Linux Mint”.</li>
          <li>Choose language, keyboard.</li>
          <li>Partition or auto-install.</li>
          <li>Create user.</li>
          <li>Reboot.</li>
        </ol>
        
        <h5 className="mt-4">Debian (Intermediate)</h5>
        <ol>
          <li>Get ISO: debian.org/distrib</li>
          <li>Boot from USB.</li>
          <li>Select “Graphical Install”.</li>
          <li>Language, location, keyboard.</li>
          <li>Configure network & hostname.</li>
          <li>Partition disk (manual or guided).</li>
          <li>Install GRUB bootloader.</li>
          <li>Reboot.</li>
        </ol>

        <h5 className="mt-4">Fedora Workstation (Intermediate)</h5>
        <ol>
          <li>ISO: getfedora.org</li>
          <li>Boot USB.</li>
          <li>Click “Install to Hard Drive”.</li>
          <li>Choose language, keyboard.</li>
          <li>Partition or auto-install.</li>
          <li>Create user, set root password.</li>
          <li>Reboot.</li>
        </ol>

        <h5 className="mt-4">Arch Linux (Advanced)</h5>
        <ol>
          <li>ISO: archlinux.org/download</li>
          <li>Boot & connect to internet.</li>
          <li>Partition disk (<code>fdisk</code>/<code>cfdisk</code>).</li>
          <li>Format (<code>mkfs.ext4</code>), mount.</li>
          <li><code>pacstrap /mnt base linux linux-firmware</code>.</li>
          <li><code>genfstab -U /mnt &gt;&gt; /mnt/etc/fstab</code>.</li>
          <li><code>arch-chroot /mnt</code>.</li>
          <li>Set timezone, locale, hostname.</li>
          <li>Install GRUB, create user.</li>
          <li>Reboot.</li>
        </ol>

        <h5 className="mt-4">Kali Linux (Cybersecurity)</h5>
        <ol>
          <li>ISO: kali.org/get-kali</li>
          <li>Boot USB.</li>
          <li>“Graphical Install”.</li>
          <li>Language, location, keyboard.</li>
          <li>Create user & password.</li>
          <li>Partition disk.</li>
          <li>Install & reboot.</li>
        </ol>
      </>
    ),
  },
  {
      title: 'Section 3: Beginner Skills',
      content: (
          <>
              <p><strong>Navigation:</strong> <code>pwd</code>, <code>cd</code>, <code>ls</code></p>
              <p><strong>Files:</strong> <code>touch</code>, <code>mkdir</code>, <code>rm</code>, <code>rmdir</code></p>
              <p><strong>View:</strong> <code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code></p>
              <p><strong>Permissions:</strong> <code>chmod</code>, <code>chown</code>, <code>ls -l</code></p>
              <h4 className="mt-4">Package Managers:</h4>
              <ul>
                  <li>Ubuntu/Debian: <code>apt install</code></li>
                  <li>Fedora/RHEL: <code>dnf install</code></li>
                  <li>Arch: <code>pacman -S</code></li>
              </ul>
          </>
      )
  },
  {
      title: 'Section 4: Intermediate Skills',
      content: (
          <>
              <p><strong>Shell Basics:</strong> variables, pipes (<code>|</code>), redirection (<code>&gt;</code>, <code>&gt;&gt;</code>).</p>
              <p><strong>Search:</strong> <code>grep</code>, <code>find</code>, <code>locate</code>.</p>
              <p><strong>Processes:</strong> <code>ps</code>, <code>top</code>, <code>htop</code>, <code>kill</code>.</p>
              <p><strong>Scripting:</strong> <code>#!/bin/bash</code>, loops, if-else.</p>
              <p><strong>Automation:</strong> <code>crontab -e</code>.</p>
          </>
      )
  },
  {
      title: 'Section 5: Advanced Administration',
      content: (
          <>
              <p><strong>System Services:</strong> <code>systemctl start/stop/enable</code>.</p>
              <p><strong>Networking:</strong> <code>ip addr</code>, <code>ping</code>, <code>ssh</code>, <code>scp</code>.</p>
              <p><strong>Firewall:</strong> <code>ufw enable</code>, <code>firewalld</code>.</p>
              <p><strong>Security:</strong> <code>sudo</code>, <code>fail2ban</code>, SELinux.</p>
              <p><strong>Storage:</strong> <code>fdisk</code>, <code>mkfs</code>, <code>mount</code>, <code>umount</code>.</p>
          </>
      )
  },
  {
      title: 'Section 6: Specializations',
      content: (
          <ul>
              <li><strong>Server Admin:</strong> Apache/Nginx, MySQL/PostgreSQL.</li>
              <li><strong>DevOps:</strong> Docker, Kubernetes, CI/CD.</li>
              <li><strong>Cybersecurity:</strong> Nmap, Wireshark, Metasploit.</li>
              <li><strong>Embedded:</strong> Raspberry Pi OS, Alpine.</li>
          </ul>
      )
  },
  {
      title: 'Section 7: Continuous Learning',
      content: (
          <>
              <p><strong>Certifications:</strong> LPIC, Linux+, RHCSA.</p>
              <p><strong>Communities:</strong> Arch Wiki, LinuxQuestions.org, r/linux.</p>
          </>
      )
  }
];

const TimelineItem: React.FC<{
  title: string;
  isFirst: boolean;
  isLast: boolean;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ title, isFirst, isLast, isOpen, onClick, children }) => {
  return (
    <div className="relative pl-10">
      {/* Dot */}
      <div className="absolute left-[-1px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent">
        <div className="h-3 w-3 rounded-full bg-brand-bg" />
      </div>
      {/* Line */}
      {!isLast && <div className="absolute left-[10px] top-8 h-[calc(100%_-_1rem)] w-0.5 bg-brand-primary" />}

      <div className="pb-8">
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center text-left hover:text-brand-accent transition-colors"
          aria-expanded={isOpen}
        >
          <h4 className="text-xl font-bold">{title}</h4>
          <ChevronDownIcon
            className={`w-6 h-6 text-brand-subtle transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="prose max-w-none prose-p:text-brand-subtle prose-strong:text-brand-text prose-li:text-brand-subtle prose-headings:text-brand-accent prose-code:text-emerald-600 prose-code:font-mono">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Introduction: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-brand-surface rounded-lg shadow-lg h-full">
      <div className="p-6 border-b border-brand-primary">
         <h3 className="text-2xl font-bold text-brand-text">Linux Learning Roadmap</h3>
      </div>
      <div className="p-6">
        {sections.map((section, index) => (
          <TimelineItem
            key={index}
            title={section.title}
            isFirst={index === 0}
            isLast={index === sections.length - 1}
            isOpen={openIndices.includes(index)}
            onClick={() => toggleItem(index)}
          >
            {section.content}
          </TimelineItem>
        ))}
      </div>
    </div>
  );
};

export default Introduction;