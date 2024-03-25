import mysql from 'mysql';
import cron from 'node-cron';
import { exec } from 'child_process';
import fs from 'fs';
import dotenv from 'dotenv';
import { error } from 'console';
import { format } from 'date-fns';



dotenv.config();

const dbConfig = {
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
  };
  
try {
  if (!fs.existsSync('backups')){
    fs.mkdirSync('backups');
    console.log('Pasta "backups" criada com sucesso.')
  }
} catch (error) {
  console.error('Erro ao criar a pasta "backups":', error);
}

  // cron.schedule('59 11 * * *', () => {
  //   doBackup();
  // });

// Extrair os horários de backup da linha de comando
const backupTimes = process.argv.slice(2);

// Verificar se pelo menos um horário de backup foi fornecido
if (backupTimes.length === 0) {
  console.warn('AVISO: Nenhum horário de backup foi fornecido.');
} else {
  // Agendar as tarefas de backup especificadas na linha de comando
  backupTimes.forEach(backupTime => {
    cron.schedule(backupTime, () => {
      doBackup();
    });
  });
}
  function doBackup() {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const backupFileName = `./backups/backupCalendar_${timestamp}.sql`;
  
    const cmd = `mysqldump --host=${dbConfig.host} --user=${dbConfig.user} --password=${dbConfig.password} ${dbConfig.database} > ${backupFileName}`;
  
    const now = new Date();
    const formattedDateTime = format(now, 'yyyy/MM/dd HH:mm');
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error('Erro ao fazer backup:', error);
        console.error('Saída de erro:', stderr);
      } else {
        console.log('Backup bem-sucedido. ' + formattedDateTime);
        console.log('Saída padrão:', stdout);
      }
    });
  }
