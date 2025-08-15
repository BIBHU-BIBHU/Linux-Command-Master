
import type { CommandTutorial } from './types';

// Static tutorials for commands
export const TUTORIALS: Record<string, CommandTutorial> = {
  // Beginner
  'pwd': {
    commandName: 'pwd',
    summary: 'Print name of current/working directory.',
    description: 'The `pwd` command prints the full filename of the current working directory.',
    examples: [
      { command: 'pwd', explanation: 'Displays the path of the current directory.' }
    ]
  },
  'ls': {
    commandName: 'ls',
    summary: 'List directory contents.',
    description: 'The `ls` command is used to list files and directories. By default, it lists the contents of the current directory. It has many options to control its output.',
    examples: [
      { command: 'ls', explanation: 'List files and directories in the current working directory.' },
      { command: 'ls -l', explanation: 'List in long format, showing permissions, ownership, size, and modification date.' },
      { command: 'ls -a', explanation: 'List all entries, including hidden files starting with a "."' },
      { command: 'ls -lh', explanation: 'List in long format with human-readable file sizes (e.g., KB, MB).' }
    ]
  },
  'cd': {
    commandName: 'cd',
    summary: 'Change the shell working directory.',
    description: 'The `cd` command is used to change the current directory in the shell.',
    examples: [
      { command: 'cd /home/user/documents', explanation: 'Change directory to `/home/user/documents`.' },
      { command: 'cd ..', explanation: 'Move up one directory level.' },
      { command: 'cd ~', explanation: 'Go to the home directory.' },
      { command: 'cd -', explanation: 'Go to the previous directory.' }
    ]
  },
  'mkdir': {
    commandName: 'mkdir',
    summary: 'Make directories.',
    description: 'The `mkdir` command creates a new directory.',
    examples: [
      { command: 'mkdir new_folder', explanation: 'Creates a directory named `new_folder`.' },
      { command: 'mkdir -p project/src/components', explanation: 'Creates parent directories as needed.' }
    ]
  },
  'rmdir': {
    commandName: 'rmdir',
    summary: 'Remove empty directories.',
    description: 'The `rmdir` command is used to remove empty directories. It will fail if the directory is not empty.',
    examples: [
      { command: 'rmdir old_folder', explanation: 'Removes the `old_folder` directory if it is empty.' },
      { command: 'rmdir -p project/src', explanation: 'Removes `src` and its parent `project` if they become empty.' }
    ]
  },
  'touch': {
    commandName: 'touch',
    summary: 'Change file timestamps or create an empty file.',
    description: 'The `touch` command is used to create an empty file or update the access and modification times of an existing file.',
    examples: [
      { command: 'touch new_file.txt', explanation: 'Creates an empty file named `new_file.txt` if it does not exist.' },
      { command: 'touch existing_file.txt', explanation: 'Updates the last modification time of `existing_file.txt` to the current time.' }
    ]
  },
  'cp': {
    commandName: 'cp',
    summary: 'Copy files and directories.',
    description: 'The `cp` command copies files or directories.',
    examples: [
      { command: 'cp source.txt destination.txt', explanation: 'Copies `source.txt` to `destination.txt`.' },
      { command: 'cp -r source_dir/ dest_dir/', explanation: 'Recursively copies the `source_dir` directory to `dest_dir`.' },
      { command: 'cp -i file.txt /backup/', explanation: 'Copies `file.txt` to `/backup/`, prompting before overwriting.' }
    ]
  },
  'mv': {
    commandName: 'mv',
    summary: 'Move or rename files and directories.',
    description: 'The `mv` command moves files or directories from one place to another. It can also be used to rename files or directories.',
    examples: [
      { command: 'mv old_name.txt new_name.txt', explanation: 'Renames `old_name.txt` to `new_name.txt`.' },
      { command: 'mv file.txt /tmp/', explanation: 'Moves `file.txt` to the `/tmp/` directory.' },
      { command: 'mv -i source.txt dest.txt', explanation: 'Moves `source.txt` to `dest.txt`, prompting before overwriting.' }
    ]
  },
  'rm': {
    commandName: 'rm',
    summary: 'Remove files or directories.',
    description: 'The `rm` command is used to remove files. Use with caution, as removed files are generally not recoverable.',
    examples: [
      { command: 'rm file.txt', explanation: 'Removes the file `file.txt`.' },
      { command: 'rm -i file.txt', explanation: 'Prompts for confirmation before removing `file.txt`.' },
      { command: 'rm -r old_directory', explanation: 'Recursively removes the directory `old_directory` and its contents.' },
      { command: 'rm -rf data/', explanation: 'Forcefully and recursively removes the `data` directory. VERY DANGEROUS!' }
    ]
  },
  'cat': {
    commandName: 'cat',
    summary: 'Concatenate files and print on the standard output.',
    description: 'The `cat` command reads data from files, and outputs their contents to standard output.',
    examples: [
      { command: 'cat file.txt', explanation: 'Display the content of `file.txt`.' },
      { command: 'cat file1.txt file2.txt > newfile.txt', explanation: 'Concatenate two files into a new file.' }
    ]
  },
  'echo': {
    commandName: 'echo',
    summary: 'Display a line of text.',
    description: 'The `echo` command prints its arguments to standard output.',
    examples: [
      { command: 'echo "Hello, World!"', explanation: 'Prints "Hello, World!" to the terminal.' },
      { command: 'echo "Saving..." > status.txt', explanation: 'Writes the text "Saving..." into the file `status.txt`.' }
    ]
  },
  'man': {
    commandName: 'man',
    summary: 'Display the manual page for a command.',
    description: 'The `man` command is used to view the manual pages for other commands, providing detailed information on their usage.',
    examples: [
      { command: 'man ls', explanation: 'Shows the manual page for the `ls` command.' }
    ]
  },
  'clear': {
    commandName: 'clear',
    summary: 'Clear the terminal screen.',
    description: 'The `clear` command clears your terminal screen.',
    examples: [
      { command: 'clear', explanation: 'Clears all previous text from the terminal display.' }
    ]
  },
  'history': {
    commandName: 'history',
    summary: 'Display command history.',
    description: 'The `history` command shows a list of previously executed commands.',
    examples: [
      { command: 'history', explanation: 'Lists the recent command history.' },
      { command: 'history 10', explanation: 'Shows the last 10 commands.' },
      { command: '!123', explanation: 'Executes command number 123 from the history.' }
    ]
  },
  'whoami': {
    commandName: 'whoami',
    summary: 'Print effective user ID.',
    description: 'The `whoami` command prints the username of the currently logged-in user.',
    examples: [
      { command: 'whoami', explanation: 'Displays your current username.' }
    ]
  },
  'date': {
    commandName: 'date',
    summary: 'Print or set the system date and time.',
    description: 'The `date` command displays the current date and time. It can also be used to format the output.',
    examples: [
      { command: 'date', explanation: 'Shows the current date and time.' },
      { command: 'date +"%Y-%m-%d"', explanation: 'Displays the date in YYYY-MM-DD format.' }
    ]
  },
  'cal': {
    commandName: 'cal',
    summary: 'Display a calendar.',
    description: 'The `cal` command displays a simple calendar in the terminal.',
    examples: [
      { command: 'cal', explanation: 'Shows the calendar for the current month.' },
      { command: 'cal 2024', explanation: 'Shows the calendar for the entire year 2024.' }
    ]
  },
  'uname': {
    commandName: 'uname',
    summary: 'Print system information.',
    description: 'The `uname` command prints basic information about the system name, version, and other details.',
    examples: [
      { command: 'uname', explanation: 'Prints the kernel name (e.g., Linux).' },
      { command: 'uname -a', explanation: 'Prints all available system information.' }
    ]
  },
  'head': {
    commandName: 'head',
    summary: 'Output the first part of files.',
    description: 'The `head` command displays the first few lines of a file.',
    examples: [
      { command: 'head file.txt', explanation: 'Shows the first 10 lines of `file.txt`.' },
      { command: 'head -n 5 file.txt', explanation: 'Shows the first 5 lines of `file.txt`.' }
    ]
  },
  'tail': {
    commandName: 'tail',
    summary: 'Output the last part of files.',
    description: 'The `tail` command displays the last few lines of a file.',
    examples: [
      { command: 'tail file.txt', explanation: 'Shows the last 10 lines of `file.txt`.' },
      { command: 'tail -n 5 file.txt', explanation: 'Shows the last 5 lines of `file.txt`.' },
      { command: 'tail -f /var/log/syslog', explanation: 'Follows the log file, showing new lines as they are added.' }
    ]
  },
  'less': {
    commandName: 'less',
    summary: 'Opposite of more; a file pager.',
    description: '`less` is a program that allows you to view files page by page. It is more powerful than `more` as it allows backward navigation.',
    examples: [
      { command: 'less long_file.txt', explanation: 'Opens `long_file.txt` for viewing. Use arrow keys to scroll and `q` to quit.' }
    ]
  },
  'file': {
    commandName: 'file',
    summary: 'Determine file type.',
    description: 'The `file` command inspects a file and tells you what type of file it is (e.g., text, image, executable).',
    examples: [
      { command: 'file document.pdf', explanation: 'Tells you that `document.pdf` is a PDF document.' },
      { command: 'file script.sh', explanation: 'Identifies `script.sh` as a shell script.' }
    ]
  },
  'wc': {
    commandName: 'wc',
    summary: 'Print newline, word, and byte counts for each file.',
    description: 'The `wc` (word count) command counts the number of lines, words, and characters in a file.',
    examples: [
      { command: 'wc file.txt', explanation: 'Shows lines, words, and bytes in `file.txt`.' },
      { command: 'wc -l file.txt', explanation: 'Counts only the number of lines.' },
      { command: 'wc -w file.txt', explanation: 'Counts only the number of words.' }
    ]
  },
  'sort': {
    commandName: 'sort',
    summary: 'Sort lines of text files.',
    description: 'The `sort` command sorts the lines of a text file alphabetically or numerically.',
    examples: [
      { command: 'sort names.txt', explanation: 'Sorts the lines in `names.txt` alphabetically.' },
      { command: 'sort -n numbers.txt', explanation: 'Sorts the lines in `numbers.txt` numerically.' },
      { command: 'sort -r names.txt', explanation: 'Sorts in reverse order.' }
    ]
  },
  'uniq': {
    commandName: 'uniq',
    summary: 'Report or omit repeated lines.',
    description: 'The `uniq` command filters adjacent, duplicate lines from a file. The input file must be sorted first.',
    examples: [
      { command: 'sort names.txt | uniq', explanation: 'Sorts `names.txt` and removes duplicate adjacent lines.' },
      { command: 'sort names.txt | uniq -c', explanation: 'Counts the occurrences of each line.' }
    ]
  },
  'which': {
    commandName: 'which',
    summary: 'Locate a command.',
    description: 'The `which` command shows the full path of a command executable.',
    examples: [
      { command: 'which python', explanation: 'Shows the path to the python executable, e.g., `/usr/bin/python`.' }
    ]
  },
  'alias': {
    commandName: 'alias',
    summary: 'Create a shortcut for a command.',
    description: 'The `alias` command allows you to create your own short names for longer commands.',
    examples: [
      { command: 'alias ll="ls -l"', explanation: 'Creates an alias `ll` that runs `ls -l`.' },
      { command: 'alias', explanation: 'Lists all currently defined aliases.' }
    ]
  },
  'unalias': {
    commandName: 'unalias',
    summary: 'Remove an alias.',
    description: 'The `unalias` command removes an alias that was previously defined.',
    examples: [
      { command: 'unalias ll', explanation: 'Removes the `ll` alias.' }
    ]
  },
  'exit': {
    commandName: 'exit',
    summary: 'Exit the shell.',
    description: 'The `exit` command terminates the current shell session.',
    examples: [
      { command: 'exit', explanation: 'Closes the terminal or ends the shell script.' }
    ]
  },
  'uptime': {
    commandName: 'uptime',
    summary: 'Tell how long the system has been running.',
    description: 'The `uptime` command shows the current time, how long the system has been running, how many users are logged on, and the system load averages.',
    examples: [
      { command: 'uptime', explanation: 'Displays system uptime and load.' }
    ]
  },
  // Intermediate
  'find': {
    commandName: 'find',
    summary: 'Search for files in a directory hierarchy.',
    description: 'The `find` command is a powerful tool for searching for files and directories based on various criteria like name, size, modification time, etc.',
    examples: [
      { command: 'find . -name "*.txt"', explanation: 'Finds all files ending with `.txt` in the current directory and subdirectories.' },
      { command: 'find /home -user bob', explanation: 'Finds all files owned by the user `bob` in `/home`.' },
      { command: 'find . -type d', explanation: 'Finds all directories in the current location.' },
      { command: 'find . -mtime -7', explanation: 'Finds files modified in the last 7 days.' }
    ]
  },
  'grep': {
    commandName: 'grep',
    summary: 'Search for patterns in text.',
    description: '`grep` (global regular expression print) searches for lines containing a match to the given pattern and prints them. It is an incredibly powerful and versatile tool for text processing.',
    examples: [
      { command: 'grep "error" log.txt', explanation: 'Search for the word "error" in the file `log.txt`.' },
      { command: 'grep -i "hello" file.txt', explanation: 'Search for "hello" case-insensitively.' },
      { command: 'grep -r "API_KEY" /etc/', explanation: 'Recursively search for "API_KEY" in all files under the `/etc/` directory.' },
      { command: 'cat data.txt | grep -v "debug"', explanation: 'Display all lines from `data.txt` that do not contain the word "debug".' }
    ]
  },
  'locate': {
    commandName: 'locate',
    summary: 'Find files by name, quickly.',
    description: '`locate` uses a pre-built database of files and directories to find files quickly. The database is usually updated daily by a cron job.',
    examples: [
      { command: 'locate my_document.pdf', explanation: 'Quickly finds the path to `my_document.pdf`.' },
      { command: 'sudo updatedb', explanation: 'Manually updates the `locate` database.' }
    ]
  },
  'df': {
    commandName: 'df',
    summary: 'Report file system disk space usage.',
    description: 'The `df` (disk free) command displays the amount of available disk space for file systems.',
    examples: [
      { command: 'df', explanation: 'Shows disk usage in 1K blocks.' },
      { command: 'df -h', explanation: 'Shows disk usage in human-readable format (KB, MB, GB).' }
    ]
  },
  'du': {
    commandName: 'du',
    summary: 'Estimate file and directory space usage.',
    description: 'The `du` (disk usage) command shows the disk space used by files and directories.',
    examples: [
      { command: 'du', explanation: 'Shows disk usage for all directories in the current path.' },
      { command: 'du -sh /var/log', explanation: 'Shows a human-readable summary of the total size of the `/var/log` directory.' }
    ]
  },
  'top': {
    commandName: 'top',
    summary: 'Display Linux processes.',
    description: 'The `top` command provides a dynamic, real-time view of the running processes on a system. It displays system summary information as well as a list of tasks currently being managed by the kernel.',
    examples: [
      { command: 'top', explanation: 'Starts the interactive process viewer. Press `q` to quit.' }
    ]
  },
  'ps': {
    commandName: 'ps',
    summary: 'Report a snapshot of the current processes.',
    description: 'The `ps` command shows information about active processes.',
    examples: [
      { command: 'ps', explanation: 'Shows processes for the current user in the current terminal.' },
      { command: 'ps aux', explanation: 'Shows all running processes on the system in BSD style.' },
      { command: 'ps -ef', explanation: 'Shows all running processes on the system in System V style.' }
    ]
  },
  'kill': {
    commandName: 'kill',
    summary: 'Send a signal to a process.',
    description: 'The `kill` command is used to send a signal to a process, most commonly to terminate it.',
    examples: [
      { command: 'kill 12345', explanation: 'Sends the default TERM signal to the process with PID 12345, asking it to terminate.' },
      { command: 'kill -9 12345', explanation: 'Sends the KILL signal to forcefully terminate the process with PID 12345.' }
    ]
  },
  'killall': {
    commandName: 'killall',
    summary: 'Kill processes by name.',
    description: 'The `killall` command terminates processes based on their name, rather than their PID.',
    examples: [
      { command: 'killall firefox', explanation: 'Kills all processes named `firefox`.' }
    ]
  },
  'chmod': {
    commandName: 'chmod',
    summary: 'Change file mode bits (permissions).',
    description: 'The `chmod` command changes the access permissions for files and directories. Permissions can be set for the owner (u), the group (g), and others (o).',
    examples: [
      { command: 'chmod +x script.sh', explanation: 'Make `script.sh` executable for everyone.' },
      { command: 'chmod 755 my_script.sh', explanation: 'Set permissions to read/write/execute for owner, and read/execute for group and others (common for scripts).' },
      { command: 'chmod 600 private.key', explanation: 'Set permissions so that only the owner has read and write access (common for private keys).' },
      { command: 'chmod -R 755 public_html', explanation: 'Recursively set permissions for the `public_html` directory and all its contents.' }
    ]
  },
  'chown': {
    commandName: 'chown',
    summary: 'Change file owner and group.',
    description: 'The `chown` command is used to change the ownership of files and directories.',
    examples: [
      { command: 'chown user:group file.txt', explanation: 'Changes the owner to `user` and group to `group` for `file.txt`.' },
      { command: 'chown bob file.txt', explanation: 'Changes only the owner of `file.txt` to `bob`.' },
      { command: 'chown -R user:group /var/www', explanation: 'Recursively changes ownership for the `/var/www` directory.' }
    ]
  },
  'tar': {
    commandName: 'tar',
    summary: 'Archiving utility.',
    description: 'The `tar` command is used to create and extract archive files. It is often combined with a compression utility like `gzip` or `bzip2`.',
    examples: [
      { command: 'tar -cvf archive.tar /path/to/dir', explanation: 'Create an archive named `archive.tar` from a directory.' },
      { command: 'tar -xvf archive.tar', explanation: 'Extract files from `archive.tar`.' },
      { command: 'tar -czvf archive.tar.gz /path/to/dir', explanation: 'Create a gzipped archive.' },
      { command: 'tar -xzvf archive.tar.gz', explanation: 'Extract a gzipped archive.' }
    ]
  },
  'unzip': {
    commandName: 'unzip',
    summary: 'List, test, and extract compressed files in a ZIP archive.',
    description: 'The `unzip` command is used to extract files from a `.zip` archive.',
    examples: [
      { command: 'unzip archive.zip', explanation: 'Extracts `archive.zip` in the current directory.' },
      { command: 'unzip archive.zip -d /path/to/destination', explanation: 'Extracts `archive.zip` to a specific directory.' }
    ]
  },
  'scp': {
    commandName: 'scp',
    summary: 'Secure copy (remote file copy program).',
    description: '`scp` allows you to securely copy files between hosts on a network. It uses ssh for data transfer.',
    examples: [
      { command: 'scp file.txt user@remote:/path/', explanation: 'Copy `file.txt` from local to a remote host.' },
      { command: 'scp user@remote:/path/file.txt .', explanation: 'Copy `file.txt` from a remote host to the current local directory.' }
    ]
  },
  'wget': {
    commandName: 'wget',
    summary: 'The non-interactive network downloader.',
    description: '`wget` is a free utility for non-interactive download of files from the web. It supports HTTP, HTTPS, and FTP protocols.',
    examples: [
      { command: 'wget https://example.com/file.zip', explanation: 'Downloads `file.zip` from the specified URL.' },
      { command: 'wget -c https://example.com/large-file.zip', explanation: 'Resumes a partially downloaded file.' }
    ]
  },
  'curl': {
    commandName: 'curl',
    summary: 'Transfer a URL.',
    description: '`curl` is a tool to transfer data from or to a server, using one of the many supported protocols (HTTP, HTTPS, FTP, etc.). It is often used for testing APIs.',
    examples: [
      { command: 'curl https://example.com', explanation: 'Displays the content of the URL.' },
      { command: 'curl -O https://example.com/file.zip', explanation: 'Downloads the file with its original name.' },
      { command: 'curl -X POST -d "param1=value1" https://api.example.com/data', explanation: 'Sends a POST request to an API.' }
    ]
  },
  'nano': {
    commandName: 'nano',
    summary: 'A simple and easy-to-use text editor.',
    description: '`nano` is a character-based text editor for Unix-like systems. It is known for its simplicity compared to `vi` or `emacs`.',
    examples: [
      { command: 'nano filename.txt', explanation: 'Opens `filename.txt` for editing. Use Ctrl+X to exit.' }
    ]
  },
  'vi': {
    commandName: 'vi',
    summary: 'A powerful and ubiquitous text editor.',
    description: '`vi` (or its modern version, `vim`) is a highly configurable text editor built to enable efficient text editing. It has a steep learning curve but is very powerful.',
    examples: [
      { command: 'vi filename.txt', explanation: 'Opens `filename.txt`. Press `i` for insert mode, `Esc` to exit insert mode, and `:wq` to write and quit.' }
    ]
  },
  'env': {
    commandName: 'env',
    summary: 'Run a program in a modified environment.',
    description: 'The `env` command can be used to print a list of environment variables or to run another utility in a custom environment without modifying the current one.',
    examples: [
      { command: 'env', explanation: 'Lists all environment variables.' }
    ]
  },
  'export': {
    commandName: 'export',
    summary: 'Set an environment variable.',
    description: 'The `export` command makes a variable available to all child processes of the current shell.',
    examples: [
      { command: 'export MY_VAR="hello"', explanation: 'Sets the environment variable `MY_VAR` to "hello".' }
    ]
  },
  'ping': {
    commandName: 'ping',
    summary: 'Send ICMP ECHO_REQUEST to network hosts.',
    description: '`ping` is a utility to test the reachability of a host on an IP network. It measures the round-trip time for messages sent from the originating host to a destination computer.',
    examples: [
      { command: 'ping google.com', explanation: 'Pings `google.com` to check for a connection. Press Ctrl+C to stop.' }
    ]
  },
  'traceroute': {
    commandName: 'traceroute',
    summary: 'Print the route packets trace to network host.',
    description: '`traceroute` tracks the path a packet takes from your computer to a destination host, showing the IP addresses of all the routers it passes through.',
    examples: [
      { command: 'traceroute google.com', explanation: 'Traces the network path to `google.com`.' }
    ]
  },
  'ifconfig': {
    commandName: 'ifconfig',
    summary: 'Configure a network interface.',
    description: '`ifconfig` is used to view and configure network interfaces. It has been largely replaced by the `ip` command on modern systems but is still in use.',
    examples: [
      { command: 'ifconfig', explanation: 'Displays information about all active network interfaces.' }
    ]
  },
  'ip': {
    commandName: 'ip',
    summary: 'Show / manipulate routing, network devices, interfaces and tunnels.',
    description: 'The `ip` command is a modern and powerful tool for network configuration on Linux, intended to replace older tools like `ifconfig` and `route`.',
    examples: [
      { command: 'ip addr show', explanation: 'Shows information about network interfaces and their IP addresses.' },
      { command: 'ip route show', explanation: 'Displays the routing table.' }
    ]
  },
  'mount': {
    commandName: 'mount',
    summary: 'Mount a filesystem.',
    description: 'The `mount` command attaches a storage device or filesystem to a directory in the file system tree, making it accessible.',
    examples: [
      { command: 'mount /dev/sda1 /mnt/data', explanation: 'Mounts the partition `/dev/sda1` to the `/mnt/data` directory.' },
      { command: 'mount', explanation: 'Lists all currently mounted filesystems.' }
    ]
  },
  'umount': {
    commandName: 'umount',
    summary: 'Unmount file systems.',
    description: 'The `umount` command detaches a mounted filesystem from the file hierarchy.',
    examples: [
      { command: 'umount /mnt/data', explanation: 'Unmounts the filesystem at `/mnt/data`.' }
    ]
  },
  'free': {
    commandName: 'free',
    summary: 'Display amount of free and used memory in the system.',
    description: 'The `free` command provides a quick overview of the system\'s memory usage, including total, used, free, and shared memory.',
    examples: [
      { command: 'free', explanation: 'Shows memory usage in kilobytes.' },
      { command: 'free -h', explanation: 'Shows memory usage in a human-readable format.' }
    ]
  },
  'hostname': {
    commandName: 'hostname',
    summary: 'Show or set the system\'s host name.',
    description: '`hostname` prints the name of the current host.',
    examples: [
      { command: 'hostname', explanation: 'Displays the current hostname.' }
    ]
  },
  'hostnamectl': {
    commandName: 'hostnamectl',
    summary: 'Control the system hostname.',
    description: '`hostnamectl` is used to query and change the system hostname and related settings on modern systemd-based systems.',
    examples: [
      { command: 'hostnamectl', explanation: 'Shows the current hostname status.' },
      { command: 'sudo hostnamectl set-hostname new-name', explanation: 'Changes the system hostname to `new-name`.' }
    ]
  },
  // Advanced
  'netstat': {
    commandName: 'netstat',
    summary: 'Print network connections, routing tables, interface statistics.',
    description: '`netstat` is a command-line tool that displays network connections for TCP, routing tables, and a number of network interface and network protocol statistics. It has been largely superseded by `ss` but is still widely used.',
    examples: [
      { command: 'netstat -tuln', explanation: 'Lists all listening TCP and UDP ports numerically without resolving hostnames.' },
      { command: 'netstat -anp', explanation: 'Shows all connections (listening and non-listening) and the programs associated with them.' },
      { command: 'netstat -r', explanation: 'Displays the kernel IP routing table.' },
      { command: 'netstat -i', explanation: 'Shows a list of network interfaces.' }
    ]
  },
  'ss': {
    commandName: 'ss',
    summary: 'Another utility to investigate sockets.',
    description: '`ss` is a modern replacement for `netstat`. It is used to dump socket statistics and displays information similar to netstat but can be faster.',
    examples: [
      { command: 'ss -tuln', explanation: 'Lists all listening TCP and UDP ports numerically.' },
      { command: 'ss -tp', explanation: 'Shows TCP connections and the processes using them.' }
    ]
  },
  'iptables': {
    commandName: 'iptables',
    summary: 'Administration tool for IPv4 packet filtering and NAT.',
    description: '`iptables` is a user-space utility program that allows a system administrator to configure the IP packet filter rules of the Linux kernel firewall, implemented as different Netfilter modules.',
    examples: [
      { command: 'sudo iptables -L', explanation: 'Lists all current firewall rules.' },
      { command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT', explanation: 'Allows incoming TCP traffic on port 22 (SSH).' }
    ]
  },
  'ufw': {
    commandName: 'ufw',
    summary: 'Uncomplicated Firewall.',
    description: '`ufw` is a user-friendly frontend for managing `iptables`. Its goal is to make managing a firewall easy and accessible.',
    examples: [
      { command: 'sudo ufw status', explanation: 'Checks the status of the firewall.' },
      { command: 'sudo ufw enable', explanation: 'Enables the firewall.' },
      { command: 'sudo ufw allow ssh', explanation: 'Allows incoming traffic for the SSH service.' }
    ]
  },
  'nmap': {
    commandName: 'nmap',
    summary: 'Network exploration tool and security / port scanner.',
    description: '`nmap` is a powerful open-source tool for network discovery and security auditing. It can discover hosts, services, operating systems, and vulnerabilities on a network.',
    examples: [
      { command: 'nmap scanme.nmap.org', explanation: 'Scans the specified host for common open ports.' },
      { command: 'nmap -p 1-1000 localhost', explanation: 'Scans ports 1 through 1000 on the local machine.' }
    ]
  },
  'htop': {
    commandName: 'htop',
    summary: 'Interactive process viewer.',
    description: '`htop` is an interactive process viewer and system monitor. It is an improved version of `top`, with features like color, mouse support, and easier process management.',
    examples: [
      { command: 'htop', explanation: 'Starts the interactive process viewer.' }
    ]
  },
  'vmstat': {
    commandName: 'vmstat',
    summary: 'Report virtual memory statistics.',
    description: '`vmstat` reports information about processes, memory, paging, block IO, traps, and cpu activity.',
    examples: [
      { command: 'vmstat 1', explanation: 'Displays a new report every second.' }
    ]
  },
  'lsof': {
    commandName: 'lsof',
    summary: 'List open files.',
    description: '`lsof` is a command meaning "list open files", which is used in many Unix-like systems to report a list of all open files and the processes that opened them.',
    examples: [
      { command: 'sudo lsof -i :80', explanation: 'Lists processes using TCP port 80.' },
      { command: 'lsof /var/log/syslog', explanation: 'Shows which process has the syslog file open.' }
    ]
  },
  'rsync': {
    commandName: 'rsync',
    summary: 'A fast, versatile, remote (and local) file-copying tool.',
    description: '`rsync` is an efficient utility for synchronizing files and directories between two locations. It minimizes data transfer by only copying the parts of files that have changed.',
    examples: [
      { command: 'rsync -avh /path/to/source /path/to/destination', explanation: 'Archives, verbosely, and human-readably syncs a local directory.' },
      { command: 'rsync -avh user@remote:/path/ /local/path/', explanation: 'Syncs a remote directory to a local one.' }
    ]
  },
  'awk': {
    commandName: 'awk',
    summary: 'Pattern scanning and processing language.',
    description: '`awk` is a powerful scripting language for processing text files. It processes files line by line and can perform actions on lines that match specific patterns.',
    examples: [
      { command: 'awk \'{print $1}\' file.txt', explanation: 'Prints the first column of `file.txt`.' }
    ]
  },
  'sed': {
    commandName: 'sed',
    summary: 'Stream editor for filtering and transforming text.',
    description: '`sed` is a stream editor. It can perform basic text transformations on an input stream (a file or input from a pipeline).',
    examples: [
      { command: 'sed \'s/old/new/g\' file.txt', explanation: 'Replaces all occurrences of "old" with "new" in `file.txt` and prints the result.' }
    ]
  },
  'cron': {
    commandName: 'cron',
    summary: 'Daemon to execute scheduled commands.',
    description: '`cron` is a time-based job scheduler in Unix-like computer operating systems. Users who set up and maintain software environments use cron to schedule jobs to run periodically at fixed times, dates, or intervals.',
    examples: [
      { command: 'crontab -l', explanation: 'Lists the current user\'s cron jobs.' },
      { command: 'crontab -e', explanation: 'Opens the cron table for editing.' }
    ]
  },
  'at': {
    commandName: 'at',
    summary: 'Execute commands at a later time.',
    description: 'The `at` command schedules a command to be run once at a particular time in the future.',
    examples: [
      { command: 'at now + 10 minutes', explanation: 'Opens a prompt to enter commands to be executed in 10 minutes.' }
    ]
  },
  'journalctl': {
    commandName: 'journalctl',
    summary: 'Query the systemd journal.',
    description: '`journalctl` is used to query and display messages from the systemd journal. The journal is a centralized logging system on modern Linux distributions.',
    examples: [
      { command: 'journalctl', explanation: 'Shows all journal entries.' },
      { command: 'journalctl -u nginx.service', explanation: 'Shows logs for the `nginx` service.' },
      { command: 'journalctl -f', explanation: 'Follows the journal, showing new messages in real time.' }
    ]
  },
  'tcpdump': {
    commandName: 'tcpdump',
    summary: 'Dump traffic on a network.',
    description: '`tcpdump` is a powerful command-line packet analyzer. It allows the user to display TCP/IP and other packets being transmitted or received over a network.',
    examples: [
      { command: 'sudo tcpdump -i eth0', explanation: 'Captures packets on the `eth0` interface.' }
    ]
  },
  'strace': {
    commandName: 'strace',
    summary: 'Trace system calls and signals.',
    description: '`strace` is a debugging utility that monitors the system calls a process makes and the signals it receives.',
    examples: [
      { command: 'strace ls -l', explanation: 'Traces the system calls made by the `ls -l` command.' }
    ]
  },
  'nc': {
    commandName: 'nc',
    summary: 'Arbitrary TCP and UDP connections and listens (netcat).',
    description: '`nc` (netcat) is a versatile networking utility for reading from and writing to network connections using TCP or UDP. It\'s often called the "Swiss-army knife for TCP/IP".',
    examples: [
      { command: 'nc -zv google.com 80', explanation: 'Checks if port 80 is open on google.com.' }
    ]
  },
  'dig': {
    commandName: 'dig',
    summary: 'DNS lookup utility.',
    description: '`dig` (domain information groper) is a flexible tool for interrogating DNS name servers.',
    examples: [
      { command: 'dig google.com', explanation: 'Performs a DNS lookup for `google.com`.' }
    ]
  },
  'whois': {
    commandName: 'whois',
    summary: 'Client for the whois directory service.',
    description: '`whois` searches for an object in a `whois` database. This is usually used to find the registration and ownership details of a domain name.',
    examples: [
      { command: 'whois google.com', explanation: 'Looks up `whois` information for the `google.com` domain.' }
    ]
  },
  'iptables-save': {
    commandName: 'iptables-save',
    summary: 'Dump IP tables rules to stdout.',
    description: '`iptables-save` is used to dump the contents of an IP table in a parsable format to STDOUT.',
    examples: [
      { command: 'sudo iptables-save', explanation: 'Prints the current iptables rules.' }
    ]
  },
  'systemctl': {
    commandName: 'systemctl',
    summary: 'Control the systemd system and service manager.',
    description: '`systemctl` is the primary tool for managing services on Linux distributions that use systemd. It can be used to start, stop, restart, enable, disable, and check the status of services.',
    examples: [
      { command: 'systemctl status nginx.service', explanation: 'Check the current status of the nginx service.' },
      { command: 'systemctl start apache2', explanation: 'Start the Apache web server service.' },
      { command: 'systemctl stop sshd', explanation: 'Stop the SSH daemon service.' },
      { command: 'systemctl enable cron.service', explanation: 'Enable the cron service to start automatically on system boot.' }
    ]
  },
  'service': {
    commandName: 'service',
    summary: 'Run a System V init script.',
    description: 'The `service` command is an older way to manage services on systems using System V init. On systemd systems, it often acts as a wrapper for `systemctl`.',
    examples: [
      { command: 'sudo service ssh status', explanation: 'Checks the status of the SSH service.' }
    ]
  },
  'dmesg': {
    commandName: 'dmesg',
    summary: 'Print or control the kernel ring buffer.',
    description: '`dmesg` is used to examine or control the kernel ring buffer. It is useful for debugging hardware issues or driver problems.',
    examples: [
      { command: 'dmesg', explanation: 'Prints all messages from the kernel ring buffer.' },
      { command: 'dmesg | grep usb', explanation: 'Shows kernel messages related to USB devices.' }
    ]
  },
  'lsblk': {
    commandName: 'lsblk',
    summary: 'List block devices.',
    description: '`lsblk` lists information about all available or the specified block devices (like hard drives and flash drives).',
    examples: [
      { command: 'lsblk', explanation: 'Lists all block devices in a tree-like format.' }
    ]
  },
  'blkid': {
    commandName: 'blkid',
    summary: 'Locate/print block device attributes.',
    description: '`blkid` is a command-line utility to locate and print block device attributes (e.g., UUID, LABEL, TYPE).',
    examples: [
      { command: 'sudo blkid', explanation: 'Displays attributes for all block devices.' }
    ]
  },
  'fdisk': {
    commandName: 'fdisk',
    summary: 'Manipulate disk partition table.',
    description: '`fdisk` is a dialog-driven program for creation and manipulation of partition tables. It understands GPT, MBR, Sun, SGI and OSF partition tables.',
    examples: [
      { command: 'sudo fdisk -l', explanation: 'Lists the partition tables for all devices.' }
    ]
  },
  'parted': {
    commandName: 'parted',
    summary: 'A partition manipulation program.',
    description: '`parted` is a program for creating and manipulating partition tables. It is more modern than `fdisk` and supports more partition table formats.',
    examples: [
      { command: 'sudo parted -l', explanation: 'Lists partition layouts on all block devices.' }
    ]
  },
  'sar': {
    commandName: 'sar',
    summary: 'Collect, report, or save system activity information.',
    description: 'The `sar` command writes to standard output the contents of selected cumulative activity counters in the operating system.',
    examples: [
      { command: 'sar -u 1 5', explanation: 'Reports CPU utilization 5 times every 1 second.' }
    ]
  },
  'iostat': {
    commandName: 'iostat',
    summary: 'Report Central Processing Unit (CPU) statistics and input/output statistics for devices and partitions.',
    description: '`iostat` is used for monitoring system input/output device loading.',
    examples: [
      { command: 'iostat', explanation: 'Shows a basic CPU and I/O report.' }
    ]
  },
  'ethtool': {
    commandName: 'ethtool',
    summary: 'Query or control network driver and hardware settings.',
    description: '`ethtool` is a utility for displaying and modifying the parameters of network interface controllers (NICs) and their associated drivers.',
    examples: [
      { command: 'ethtool eth0', explanation: 'Displays settings for the `eth0` network interface.' }
    ]
  },
  // Expert
  'strings': {
    commandName: 'strings',
    summary: 'Print the sequences of printable characters in files.',
    description: 'The `strings` command is used to find and display the printable strings in a binary or data file.',
    examples: [
      { command: 'strings /usr/bin/ls', explanation: 'Shows printable text inside the `ls` executable file.' }
    ]
  },
  'xargs': {
    commandName: 'xargs',
    summary: 'Build and execute command lines from standard input.',
    description: '`xargs` reads items from standard input and executes a command with those items as arguments. It\'s useful for processing a large number of files.',
    examples: [
      { command: 'find . -name "*.log" | xargs rm', explanation: 'Finds all `.log` files and uses `xargs` to pass them to `rm` for deletion.' }
    ]
  },
  'tee': {
    commandName: 'tee',
    summary: 'Read from standard input and write to standard output and files.',
    description: 'The `tee` command is used to split the output of a program, sending it to both the screen (standard output) and a file.',
    examples: [
      { command: 'ls -l | tee file.txt', explanation: 'Displays the output of `ls -l` on the screen and also saves it to `file.txt`.' }
    ]
  },
  'yes': {
    commandName: 'yes',
    summary: 'Output a string repeatedly until killed.',
    description: '`yes` repeatedly outputs a string (by default, "y") followed by a newline. It is often used to provide automated affirmative responses to scripts.',
    examples: [
      { command: 'yes | sudo apt install package', explanation: 'Automatically answers "yes" to any confirmation prompts during package installation.' }
    ]
  },
  'watch': {
    commandName: 'watch',
    summary: 'Execute a program periodically, showing output fullscreen.',
    description: '`watch` runs a command repeatedly and displays its output and errors. This allows you to see the output change over time.',
    examples: [
      { command: 'watch -n 1 date', explanation: 'Runs the `date` command every second.' }
    ]
  },
  'tree': {
    commandName: 'tree',
    summary: 'List contents of directories in a tree-like format.',
    description: 'The `tree` command provides a recursive, indented listing of files and directories.',
    examples: [
      { command: 'tree', explanation: 'Displays the current directory as a tree.' }
    ]
  },
  'basename': {
    commandName: 'basename',
    summary: 'Strip directory and suffix from filenames.',
    description: '`basename` prints the filename portion of a path.',
    examples: [
      { command: 'basename /usr/bin/sort', explanation: 'Outputs "sort".' }
    ]
  },
  'dirname': {
    commandName: 'dirname',
    summary: 'Strip last component from file name.',
    description: '`dirname` prints the directory portion of a path.',
    examples: [
      { command: 'dirname /usr/bin/sort', explanation: 'Outputs "/usr/bin".' }
    ]
  },
  'split': {
    commandName: 'split',
    summary: 'Split a file into pieces.',
    description: 'The `split` command is used to break up a large file into smaller, more manageable pieces.',
    examples: [
      { command: 'split -l 1000 largefile.txt prefix_', explanation: 'Splits `largefile.txt` into files of 1000 lines each, with names starting `prefix_`.' }
    ]
  },
  'join': {
    commandName: 'join',
    summary: 'Join lines of two files on a common field.',
    description: '`join` merges two sorted text files based on a common field.',
    examples: [
      { command: 'join file1.txt file2.txt', explanation: 'Joins two sorted files on their first field.' }
    ]
  },
  'cut': {
    commandName: 'cut',
    summary: 'Remove sections from each line of files.',
    description: 'The `cut` command is used for extracting sections from each line of input, usually from a file.',
    examples: [
      { command: 'cut -d: -f1 /etc/passwd', explanation: 'Extracts the first field (usernames) from the password file, using ":" as a delimiter.' }
    ]
  },
  'paste': {
    commandName: 'paste',
    summary: 'Merge lines of files.',
    description: 'The `paste` command merges corresponding lines from several files side-by-side, separated by tabs.',
    examples: [
      { command: 'paste file1.txt file2.txt', explanation: 'Merges lines from `file1.txt` and `file2.txt`.' }
    ]
  },
  'cmp': {
    commandName: 'cmp',
    summary: 'Compare two files byte by byte.',
    description: '`cmp` compares two files and reports the first byte and line number where they differ. It is useful for checking if files are identical.',
    examples: [
      { command: 'cmp file1.txt file2.txt', explanation: 'Compares the two files and reports the first difference.' }
    ]
  },
  'diff': {
    commandName: 'diff',
    summary: 'Compare files line by line.',
    description: '`diff` analyzes two files and prints the lines that are different. It is the basis for many version control systems.',
    examples: [
      { command: 'diff -u old_version.txt new_version.txt', explanation: 'Compares two files and shows the differences in a unified format.' }
    ]
  },
  'comm': {
    commandName: 'comm',
    summary: 'Compare two sorted files line by line.',
    description: '`comm` compares two sorted files and produces three columns of output: lines unique to file1, lines unique to file2, and lines common to both.',
    examples: [
      { command: 'comm file1.txt file2.txt', explanation: 'Compares two sorted files.' }
    ]
  },
  'md5sum': {
    commandName: 'md5sum',
    summary: 'Compute and check MD5 message digest.',
    description: '`md5sum` calculates a 128-bit MD5 hash, commonly used to verify file integrity.',
    examples: [
      { command: 'md5sum file.iso', explanation: 'Calculates the MD5 checksum of `file.iso`.' }
    ]
  },
  'sha256sum': {
    commandName: 'sha256sum',
    summary: 'Compute and check SHA256 message digest.',
    description: '`sha256sum` calculates a 256-bit SHA256 hash, which is more secure than MD5 for integrity verification.',
    examples: [
      { command: 'sha256sum file.zip', explanation: 'Calculates the SHA256 checksum of `file.zip`.' }
    ]
  },
  'base64': {
    commandName: 'base64',
    summary: 'base64 encode/decode data and print to standard output.',
    description: 'The `base64` command encodes binary data into printable ASCII characters, or decodes it back.',
    examples: [
      { command: 'base64 file.txt', explanation: 'Encodes `file.txt` in base64.' },
      { command: 'base64 -d encoded.txt', explanation: 'Decodes a base64 encoded file.' }
    ]
  },
  'hexdump': {
    commandName: 'hexdump',
    summary: 'ASCII, decimal, hexadecimal, octal dump.',
    description: '`hexdump` displays the contents of a file in hexadecimal, octal, decimal, or ASCII formats. It is useful for inspecting binary files.',
    examples: [
      { command: 'hexdump -C binaryfile', explanation: 'Displays the file in canonical hex+ASCII format.' }
    ]
  },
  'od': {
    commandName: 'od',
    summary: 'Dump files in octal and other formats.',
    description: '`od` (octal dump) is used to display files in various human-readable formats, including octal, hexadecimal, and ASCII.',
    examples: [
      { command: 'od -c file', explanation: 'Dumps the file showing backslashed character escapes.' }
    ]
  },
  'lshw': {
    commandName: 'lshw',
    summary: 'List hardware.',
    description: '`lshw` is a small tool to extract detailed information on the hardware configuration of the machine.',
    examples: [
      { command: 'sudo lshw', explanation: 'Displays a comprehensive list of all hardware.' }
    ]
  },
  'lscpu': {
    commandName: 'lscpu',
    summary: 'Display information about the CPU architecture.',
    description: '`lscpu` gathers CPU architecture information from sysfs and /proc/cpuinfo.',
    examples: [
      { command: 'lscpu', explanation: 'Shows detailed CPU information.' }
    ]
  },
  'lsusb': {
    commandName: 'lsusb',
    summary: 'List USB devices.',
    description: '`lsusb` is a utility for displaying information about USB buses in the system and the devices connected to them.',
    examples: [
      { command: 'lsusb', explanation: 'Lists all connected USB devices.' }
    ]
  },
  'lspci': {
    commandName: 'lspci',
    summary: 'List all PCI devices.',
    description: '`lspci` is a utility for displaying information about PCI buses in the system and devices connected to them.',
    examples: [
      { command: 'lspci', explanation: 'Lists all connected PCI devices.' }
    ]
  },
  'nmcli': {
    commandName: 'nmcli',
    summary: 'Command-line tool for controlling NetworkManager.',
    description: '`nmcli` is a command-line client for the NetworkManager, which allows you to manage network connections.',
    examples: [
      { command: 'nmcli device status', explanation: 'Shows the status of all network devices.' }
    ]
  },
  'ssh': {
    commandName: 'ssh',
    summary: 'Secure Shell client (remote login program).',
    description: 'SSH, or Secure Shell, is a protocol used to securely log onto remote systems. It is the primary method used to manage servers and other devices remotely.',
    examples: [
      { command: 'ssh user@example.com', explanation: 'Connect to `example.com` as the user `user`.' },
      { command: 'ssh -p 2222 user@hostname', explanation: 'Connect to a host on a specific port (2222).' },
      { command: 'ssh -i ~/.ssh/id_rsa user@host', explanation: 'Connect using a specific private key file.' },
    ]
  },
  'ssh-keygen': {
    commandName: 'ssh-keygen',
    summary: 'Authentication key generation, management and conversion.',
    description: '`ssh-keygen` generates, manages, and converts authentication keys for SSH.',
    examples: [
      { command: 'ssh-keygen', explanation: 'Generates a new pair of SSH public and private keys interactively.' }
    ]
  },
  'ssh-copy-id': {
    commandName: 'ssh-copy-id',
    summary: 'Use locally available keys to authorize logins on a remote machine.',
    description: '`ssh-copy-id` is a script that installs your public key in a remote machine\'s `authorized_keys` file, enabling passwordless SSH logins.',
    examples: [
      { command: 'ssh-copy-id user@remote_host', explanation: 'Copies your default public key to the remote host for the specified user.' }
    ]
  },
  'zip': {
    commandName: 'zip',
    summary: 'Package and compress (archive) files.',
    description: '`zip` is a compression and file packaging utility. It creates `.zip` archives compatible with other operating systems.',
    examples: [
      { command: 'zip archive.zip file1.txt file2.txt', explanation: 'Creates `archive.zip` containing the specified files.' },
      { command: 'zip -r archive.zip directory/', explanation: 'Recursively zips a directory.' }
    ]
  },
  'gzip': {
    commandName: 'gzip',
    summary: 'Compress or expand files.',
    description: 'The `gzip` command compresses files using Lempel-Ziv coding (LZ77). By convention, the original file is replaced by one with a `.gz` extension.',
    examples: [
      { command: 'gzip myfile.txt', explanation: 'Compresses `myfile.txt` and renames it to `myfile.txt.gz`.' },
      { command: 'gzip -k myfile.txt', explanation: 'Compresses `myfile.txt` to `myfile.txt.gz` but keeps the original file.' },
      { command: 'gzip -d myfile.txt.gz', explanation: 'Decompresses `myfile.txt.gz` back to `myfile.txt`.' }
    ]
  },
  'gunzip': {
    commandName: 'gunzip',
    summary: 'Decompress files compressed with gzip.',
    description: '`gunzip` is used to decompress files that were compressed using `gzip`. It is equivalent to `gzip -d`.',
    examples: [
      { command: 'gunzip file.txt.gz', explanation: 'Decompresses `file.txt.gz` to `file.txt`.' }
    ]
  },
  'bzip2': {
    commandName: 'bzip2',
    summary: 'A block-sorting file compressor.',
    description: '`bzip2` is a file compression utility that typically compresses files more effectively than `gzip`, but is slower. Compressed files have a `.bz2` extension.',
    examples: [
      { command: 'bzip2 file.txt', explanation: 'Compresses `file.txt` to `file.txt.bz2`.' }
    ]
  },
  'bunzip2': {
    commandName: 'bunzip2',
    summary: 'Decompress files compressed with bzip2.',
    description: '`bunzip2` is used to decompress `.bz2` files. It is equivalent to `bzip2 -d`.',
    examples: [
      { command: 'bunzip2 file.txt.bz2', explanation: 'Decompresses `file.txt.bz2` to `file.txt`.' }
    ]
  },
  'xz': {
    commandName: 'xz',
    summary: 'Compress or decompress .xz and .lzma files.',
    description: '`xz` is a modern compression utility that offers a high compression ratio. Compressed files usually have a `.xz` extension.',
    examples: [
      { command: 'xz file.tar', explanation: 'Compresses `file.tar` to `file.tar.xz`.' }
    ]
  },
  'unxz': {
    commandName: 'unxz',
    summary: 'Decompress .xz files.',
    description: '`unxz` is used to decompress `.xz` files. It is equivalent to `xz -d`.',
    examples: [
      { command: 'unxz file.tar.xz', explanation: 'Decompresses `file.tar.xz` to `file.tar`.' }
    ]
  },
  'stat': {
    commandName: 'stat',
    summary: 'Display file or file system status.',
    description: 'The `stat` command provides detailed information about a file, such as its size, permissions, access times, and inode number.',
    examples: [
      { command: 'stat file.txt', explanation: 'Shows detailed status information for `file.txt`.' }
    ]
  },
  'time': {
    commandName: 'time',
    summary: 'Run a program and summarize system resource usage.',
    description: 'The `time` command measures how long a command takes to execute, breaking it down into real, user, and system time.',
    examples: [
      { command: 'time ls -R /', explanation: 'Measures the time it takes to recursively list all files from the root directory.' }
    ]
  },
  'fg': {
    commandName: 'fg',
    summary: 'Bring a job to the foreground.',
    description: 'The `fg` command resumes a job that was suspended or running in the background and brings it to the foreground.',
    examples: [
      { command: 'fg %1', explanation: 'Brings job number 1 to the foreground.' }
    ]
  },
  'bg': {
    commandName: 'bg',
    summary: 'Send a job to the background.',
    description: 'The `bg` command resumes a suspended job and runs it in the background.',
    examples: [
      { command: 'bg %1', explanation: 'Resumes suspended job number 1 in the background.' }
    ]
  },
  'jobs': {
    commandName: 'jobs',
    summary: 'List active jobs.',
    description: 'The `jobs` command displays the status of jobs started in the current shell session.',
    examples: [
      { command: 'jobs -l', explanation: 'Lists active jobs along with their process IDs.' }
    ]
  },
  'disown': {
    commandName: 'disown',
    summary: 'Remove a job from the shell\'s job control.',
    description: '`disown` removes a job from the job table, so it is no longer managed by the shell. This is often used with `nohup` to keep a process running after logging out.',
    examples: [
      { command: 'disown %1', explanation: 'Disowns job number 1.' }
    ]
  },
  'nohup': {
    commandName: 'nohup',
    summary: 'Run a command immune to hangups.',
    description: 'The `nohup` command runs a command that will not be terminated when the user logs out. Output is typically redirected to a `nohup.out` file.',
    examples: [
      { command: 'nohup ./my_long_script.sh &', explanation: 'Runs the script in the background and prevents it from being killed on logout.' }
    ]
  },
  'screen': {
    commandName: 'screen',
    summary: 'Screen manager with VT100/ANSI terminal emulation.',
    description: '`screen` is a terminal multiplexer that allows you to manage multiple terminal sessions from a single window. You can detach from a session and reattach later, keeping processes running.',
    examples: [
      { command: 'screen', explanation: 'Starts a new screen session.' },
      { command: 'screen -ls', explanation: 'Lists running screen sessions.' },
      { command: 'screen -r', explanation: 'Reattaches to a detached screen session.' }
    ]
  },
  'tmux': {
    commandName: 'tmux',
    summary: 'Terminal multiplexer.',
    description: '`tmux` is a modern terminal multiplexer similar to `screen`. It allows for multiple terminals to be created, accessed, and controlled from a single screen. It is highly configurable.',
    examples: [
      { command: 'tmux new -s my_session', explanation: 'Starts a new tmux session named `my_session`.' },
      { command: 'tmux ls', explanation: 'Lists running tmux sessions.' },
      { command: 'tmux attach -t my_session', explanation: 'Attaches to the session named `my_session`.' }
    ]
  },
  'dd': {
    commandName: 'dd',
    summary: 'Convert and copy a file.',
    description: '`dd` is a powerful utility for low-level copying and conversion of data. It is often used for tasks like creating disk images or bootable USB drives. Be extremely careful with this command, as it can easily destroy data.',
    examples: [
      { command: 'sudo dd if=/dev/sda of=~/disk_image.img', explanation: 'Creates a full disk image of `/dev/sda`.' },
      { command: 'dd if=/dev/zero of=file.txt bs=1M count=10', explanation: 'Creates a 10MB file filled with zeros.' }
    ]
  },
  'mkfs': {
    commandName: 'mkfs',
    summary: 'Build a Linux filesystem.',
    description: '`mkfs` is used to create a filesystem on a device, usually a disk partition. It is a frontend for various filesystem-specific builders (e.g., `mkfs.ext4`).',
    examples: [
      { command: 'sudo mkfs.ext4 /dev/sdb1', explanation: 'Creates an ext4 filesystem on the partition `/dev/sdb1`.' }
    ]
  },
  'fsck': {
    commandName: 'fsck',
    summary: 'Check and repair a Linux filesystem.',
    description: '`fsck` (file system consistency check) is a utility used to check for and optionally repair errors in filesystems.',
    examples: [
      { command: 'sudo fsck /dev/sdb1', explanation: 'Checks the filesystem on `/dev/sdb1` for errors. The partition must be unmounted first.' }
    ]
  }
};


// Pool of questions for the daily quiz challenge
interface QuizQuestionData {
  question: string;
  options: string[];
  answer: string;
}

export const QUIZ_QUESTIONS: Record<string, QuizQuestionData[]> = {
  'ls': [
    { question: 'What is the primary purpose of the `ls` command?', options: ['To list files and directories', 'To create new files', 'To show system storage', 'To log into a server'], answer: 'To list files and directories' },
    { question: 'How do you list files in a long format, showing details?', options: ['ls -l', 'ls -d', 'ls -long', 'ls --details'], answer: 'ls -l' },
    { question: 'Which option shows hidden files (dotfiles)?', options: ['ls -h', 'ls -a', 'ls -hidden', 'ls -dots'], answer: 'ls -a' },
  ],
  'grep': [
    { question: 'What is `grep` used for?', options: ['To format text', 'To search for patterns in text', 'To create graphics', 'To remove files'], answer: 'To search for patterns in text' },
    { question: 'How do you search for "error" in `app.log` case-insensitively?', options: ['grep --no-case "error" app.log', 'grep -i "error" app.log', 'grep -c "error" app.log', 'grep -s "error" app.log'], answer: 'grep -i "error" app.log' },
    { question: 'How do you count the number of matching lines?', options: ['grep -n "pattern" file', 'grep --count "pattern" file', 'grep -c "pattern" file', 'grep -l "pattern" file'], answer: 'grep -c "pattern" file' },
  ],
  'chmod': [
    { question: 'What does the `chmod` command do?', options: ['Changes file ownership', 'Changes file permissions', 'Creates a new file', 'Checks for file modifications'], answer: 'Changes file permissions' },
    { question: 'How do you make a script `run.sh` executable for everyone?', options: ['chmod +x run.sh', 'chmod -x run.sh', 'chmod r-- run.sh', 'chmod 777 run.sh'], answer: 'chmod +x run.sh' },
    { question: 'What does `chmod 600 private.key` do?', options: ['Owner: read/write; Others: none', 'Everyone: read-only', 'Owner: execute-only', 'Owner: read-only; Group: read-only'], answer: 'Owner: read/write; Others: none' },
  ],
  'systemctl': [
    { question: 'What is `systemctl` used for?', options: ['To manage systemd services', 'To control system volume', 'To configure network devices', 'To install software packages'], answer: 'To manage systemd services' },
    { question: 'How do you check the status of the `nginx` service?', options: ['systemctl --status nginx', 'systemctl get nginx', 'systemctl status nginx', 'systemctl view nginx'], answer: 'systemctl status nginx' },
    { question: 'How do you enable a service to start on boot?', options: ['systemctl startup servicename', 'systemctl enable servicename', 'systemctl on servicename', 'systemctl load servicename'], answer: 'systemctl enable servicename' },
  ],
  'ssh': [
    { question: 'What is the primary use of the `ssh` command?', options: ['To securely connect to a remote server', 'To search for files', 'To schedule system tasks', 'To check storage health'], answer: 'To securely connect to a remote server' },
    { question: 'How do you connect as `user` to `host.com` on port `2222`?', options: ['ssh user@host.com:2222', 'ssh user@host.com --port 2222', 'ssh -p 2222 user@host.com', 'ssh connect user@host.com 2222'], answer: 'ssh -p 2222 user@host.com' },
    { question: 'Which command generates a new SSH key pair?', options: ['ssh-key', 'ssh-gen', 'keygen', 'ssh-keygen'], answer: 'ssh-keygen' },
  ],
  'pwd': [
    { question: 'What does `pwd` stand for?', options: ['Print Working Directory', 'Pass-Word Directory', 'Path of Working Directory', 'Present Working Directory'], answer: 'Print Working Directory' },
    { question: 'What is the output of `pwd`?', options: ['The relative path', 'The user\'s home directory', 'The absolute path of the current directory', 'A list of directory contents'], answer: 'The absolute path of the current directory' },
    { question: 'Is `pwd` a shell builtin or a separate executable?', options: ['Always a separate executable', 'Always a shell builtin', 'It can be both', 'Neither, it is a kernel function'], answer: 'It can be both' }
  ],
  'cd': [
    { question: 'How do you navigate to your home directory?', options: ['cd /home', 'cd', 'cd --home', 'cd root'], answer: 'cd' },
    { question: 'How do you navigate to the previously visited directory?', options: ['cd ..', 'cd last', 'cd prev', 'cd -'], answer: 'cd -' },
    { question: 'How do you move up one level in the directory tree?', options: ['cd up', 'cd ..', 'cd ^', 'cd /'], answer: 'cd ..' }
  ],
  'find': [
    { question: 'How do you find all files named `config.yml` in the current directory and its subdirectories?', options: ['find . -name config.yml', 'find . --file config.yml', 'search . config.yml', 'grep config.yml .'], answer: 'find . -name config.yml' },
    { question: 'Which option is used to find files based on their type, like directories?', options: ['-kind d', '-type d', '--dir', '-isDirectory'], answer: '-type d' },
    { question: 'How can you execute a command on each file found?', options: ['Using the --run option', 'Using the -exec option', 'Using the -do option', 'Using the | pipe operator'], answer: 'Using the -exec option' }
  ],
  'ps': [
    { question: 'What is the `ps` command used for?', options: ['To show network packets', 'To report a snapshot of current processes', 'To pause a script', 'To print a string'], answer: 'To report a snapshot of current processes' },
    { question: 'How do you see all processes running on the system?', options: ['ps all', 'ps -a', 'ps aux', 'ps --system'], answer: 'ps aux' },
    { question: 'What is the PID?', options: ['Program ID', 'Parent ID', 'Process ID', 'Priority ID'], answer: 'Process ID' }
  ],
  'kill': [
    { question: 'What is the purpose of the `kill` command?', options: ['To delete a file', 'To stop the computer', 'To send a signal to a process', 'To clear the terminal'], answer: 'To send a signal to a process' },
    { question: 'What is the default signal sent by `kill`?', options: ['SIGKILL (9)', 'SIGHUP (1)', 'SIGTERM (15)', 'SIGSTOP (19)'], answer: 'SIGTERM (15)' },
    { question: 'How do you forcefully terminate a process with PID 1234?', options: ['kill -f 1234', 'kill -9 1234', 'kill --force 1234', 'terminate 1234'], answer: 'kill -9 1234' }
  ]
};
