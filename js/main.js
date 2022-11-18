const { createApp } = Vue;

createApp({
   data() {
      return {
         // data..
         currentContact: 0,
         newMessage: null,
         contacts: [
            {
               name: 'Michele',
               avatar: '_1',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Hai portato a spasso il cane?',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di stendere i panni',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received',
                  },
               ],
            },
            {
               name: 'Fabio',
               avatar: '_2',
               visible: true,
               messages: [
                  {
                     date: '20/03/2020 16:30:00',
                     message: 'Ciao come stai?',
                     status: 'sent',
                  },
                  {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received',
                  },
                  {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent',
                  },
               ],
            },
            {
               name: 'Samuele',
               avatar: '_3',
               visible: true,
               messages: [
                  {
                     date: '28/03/2020 10:10:40',
                     message: 'La Marianna va in campagna',
                     status: 'received',
                  },
                  {
                     date: '28/03/2020 10:20:10',
                     message: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent',
                  },
                  {
                     date: '28/03/2020 16:15:22',
                     message: 'Ah scusa!',
                     status: 'received',
                  },
               ],
            },
            {
               name: 'Alessandro B.',
               avatar: '_4',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Lo sai che ha aperto una nuova pizzeria?',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Si, ma preferirei andare al cinema',
                     status: 'received',
                  },
               ],
            },
            {
               name: 'Alessandro L.',
               avatar: '_5',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ricordati di chiamare la nonna',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Va bene, stasera la sento',
                     status: 'received',
                  },
               ],
            },
            {
               name: 'Claudia',
               avatar: '_6',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao Claudia, hai novità?',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Non ancora',
                     status: 'received',
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'Nessuna nuova, buona nuova',
                     status: 'sent',
                  },
               ],
            },
            {
               name: 'Federico',
               avatar: '_7',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Fai gli auguri a Martina che è il suo compleanno!',
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Grazie per avermelo ricordato, le scrivo subito!',
                     status: 'received',
                  },
               ],
            },
            {
               name: 'Davide',
               avatar: '_8',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao, andiamo a mangiare la pizza stasera?',
                     status: 'received',
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                     status: 'sent',
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'OK!!',
                     status: 'received',
                  },
               ],
            },
         ],
      };
   },
   methods: {
      // metodi vue
      // invio nuovo messaggio
      sendMessage() {
         if (this.newMessage !== null) {
            const currentTime = new Date();

            const sentMessage = {
               date: currentTime,
               message: this.newMessage,
               status: 'sent',
            };
            this.contacts[this.currentContact].messages.push(sentMessage);
            this.newMessage = null;
            this.autoReply();
         }
      },
      // il cpu manda una risposta dopo 2sec
      autoReply() {
         setInterval(() => {}, 2000);
      },

      // converto con Moment.JS la data
      formatDate(dateString) {
         return moment(dateString, 'DD/MM/YYYY, h:mm:ss').format('kk:mm');
      },

      //prendo l'ultimo item di un array (content/data dell'ultimo messaggio
      getLast(arrItem, index) {
         const messageArr = this.contacts[index].messages;

         if (arrItem === 'message') {
            return messageArr[messageArr.length - 1].message;
         } else if (arrItem === 'date') {
            return messageArr[messageArr.length - 1].date;
         }
      },
   },
   created() {
      // eventuali API
   },
}).mount('#app');
