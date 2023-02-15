const speakers = [
  {
    images: {
      imagesUrl: 'img/speaker-1.png',
      imagesAlt: 'Chandler Moore',
    },
    name: 'Professor of Entrepreneurial Legal Studies at Havard',
    shortDescription: 'Department of Entrepreneurial Legal Studies at Havard.',
    profile: 'Chandler studies commons-based perr production, and published his seminal book The Wealth of Network in 2019.',
  },

  {
    images: {
      imagesUrl: 'img/osi.jpeg',
      imagesAlt: 'Prof. Oluyemi Osinbajo',
    },
    name: 'Prof. Oluyemi Osinbajo',
    shortDescription: 'Provost at Kwame Nkrumah University of Science and technology',
    profile: `Oluyemi Oluleke Osinbajo GCON (born 8 March 1957) is 
    a Nigerian lawyer, professor, and politician who is the 14th and
     current Vice President of Nigeria since 2015. A member of the All
      Progressives Congress (APC), he previously served as Attorney General
       of Lagos State from 1999 to 2007 and holds
     the title of Senior Advocate of Nigeria.`,
  },

  {
    images: {
      imagesUrl: 'img/obas.jpeg',
      imagesAlt: 'Mr. Godwin Obaseki',
    },
    name: 'Mr. Godwin Obaseki',
    shortDescription: 'Executive Governor of Edo State.',
    profile: ` Godwin Nogheghase Obaseki (born 1 July 1957) is a Nigerian 
    politician and businessman who 
    is currently the Governor of Edo State.Before becoming governor, he served as
     chairman of the Edo State Economic and Strategy Team inaugurated
      by former Governor Adams Oshiomole in March 2009.
     Obaseki holds post graduate degrees in both Finance and
     International Business,[6] and is a Fellow of the Chartered
      Institute of Stock Brokers, Nigeria.`,
  },

  {
    images: {
      imagesUrl: 'img/speaker-2.png',
      imagesAlt: 'Scott Michael Disick',
    },
    name: 'Scott Michael Disick',
    shortDescription: 'Scott Michael Disick',
    profile: `Scott Michael Disick (born May 26, 1983)[1][2] is an American 
    media personality and socialite. He is most famous for starring as a 
    main cast member on Keeping Up with the Kardashians and its spinoffs. 
    Disick's popularity on Keeping Up with the Kardashians led to the development
     of a house flipping show, Flip It Like Disick, that aired on E!.[5]
      In addition to starring on reality shows, Disick has pursued multiple
       business ventures, including starting a clothing brand Talentless,
       investing in nightclubs, and running multiple vitamin companies.`,
  },

  {
    images: {
      imagesUrl: 'img/eme.jpeg',
      imagesAlt: 'Mr. Godwin Emefiele',
    },
    name: 'Mr. Godwin Emefiele',
    shortDescription: 'Governor of Central Bank Of Nigera',
    profile: `Emefiele has been governor of the Central Bank of Nigeria 
    since 2014. During his first term, he supervised an interventionist
     currency policy at the behest of the presidency, propping up the
      Nigerian Naira by pumping billions of dollars into the foreign 
      exchange market. He also introduced a multiple exchange rate 
      regime to try to mask pressure on the Naira and avoid a series 
      of devaluations.`,
  },

  {
    images: {
      imagesUrl: 'img/zainb.jpeg',
      imagesAlt: 'Scott Michael Disick',
    },
    name: 'rs. Zainab Ahmed',
    shortDescription: 'Gospel Artiste',
    profile: `Zainab Shamsuna Ahmed CON (born 16 June 1960) is a 
    Nigerian accountant[1] who has been serving as Minister of Finance,
     Budget and National Planning[2][3] since 2019. At the time, President
      Muhammadu Buhari brought the two ministries under her as one, making her
       the de facto Minister of Economy.An accountant by profession with a Bachelor of Science degree in accounting from ABU Zaria and a 
       Master's in Business Administration(MBA).`,
  },
];

function showGuests(guest) {
  const guestCard = `<div class="guest">
  <div class="image_design">
    <img src="${guest.images.imagesUrl}" alt="${guest.images.imagesAlt}">
  </div>
  <aside>
    <div>
      <h4>${guest.name}</h4>
      <p>${guest.shortDescription}</p>
      <hr width="30">
    </div>
    <span>${guest.profile}</span>
  </aside>
</div>`;
  return guestCard;
}

const sectionForGuests = document.querySelector('.guest_list');

function showMyGuests() {
  const guestKeys = Object.keys(speakers);
  const guestKeysLength = Object.keys(speakers).length;
  for (let i = 0; i < guestKeysLength; i += 1) {
    sectionForGuests.innerHTML += showGuests(speakers[guestKeys[i]]);
  }
}

sectionForGuests.onresize = showMyGuests();
