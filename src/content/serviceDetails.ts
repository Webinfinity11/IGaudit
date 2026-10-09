// ქვე-სერვისების დეტალური ტექსტი (ბლოკებად). სათაური და მოკლე აღწერა - locales → services.<slug>.subs.<sub>
// ბლოკები: h - ქვესათაური, p - აბზაცი, ul - სია, ol - დანომრილი სია, quote - გამოყოფილი ფრაზა
export type Block =
  { h: string } | { p: string } | { ul: string[] } | { ol: string[] } | { quote: string }

export const serviceDetails: Record<string, { ka: Block[]; en: Block[] }> = {
  'audit/audit': {
    ka: [
      {
        p: 'დღევანდელ სწრაფად ცვალებად და კონკურენტულ ბიზნესგარემოში კომპანიებისთვის საერთაშორისო ბაზრებზე განვითარება და საქმიანობის გაფართოება სულ უფრო აქტუალური ხდება. ამ პროცესში ფინანსური გამჭვირვალობა და სანდო ინფორმაცია განსაკუთრებულ მნიშვნელობას იძენს. ინვესტორების, ბიზნესპარტნიორებისა და სხვა დაინტერესებული მხარეების ნდობა ხშირად განსაზღვრავს კომპანიისთვის კაპიტალის მოზიდვის, საინვესტიციო შესაძლებლობების გამოყენებისა და საფონდო ბაზარზე გასვლის პერსპექტივებს.',
      },
      {
        p: 'ფინანსური ანგარიშგების აუდიტის მთავარი მიზანია დამოუკიდებელი შეფასების საფუძველზე გონივრული რწმუნების მოპოვება, რომ ფინანსური ანგარიშგება არ შეიცავს არსებით უზუსტობებს და სათანადოდ ასახავს კომპანიის ფინანსურ მდგომარეობას, საქმიანობის ფინანსურ შედეგებსა და ფულადი სახსრების მოძრაობას.',
      },
      {
        p: 'ჩვენი აუდიტორული მომსახურება კომპანიებს ეხმარება შექმნან სანდო და გამჭვირვალე ფინანსური საინფორმაციო გარემო, რაც, თავის მხრივ, აძლიერებს ნდობას როგორც ინვესტორებისა და პარტნიორების, ისე სხვა დაინტერესებული მხარეების მხრიდან.',
      },
      {
        p: 'IG GROUP-ის პროფესიონალთა გუნდი კლიენტებს სთავაზობს აუდიტისა და ბიზნესსაკონსულტაციო მომსახურების ფართო სპექტრს, რომელიც მორგებულია კომპანიის საქმიანობის სპეციფიკაზე, მიზნებსა და ინდივიდუალურ საჭიროებებზე. ჩვენი მიდგომა ითვალისწინებს როგორც ბიზნესის მფლობელებისა და ინვესტორების, ისე მარეგულირებელი ორგანოებისა და სხვა დაინტერესებული მხარეების ინფორმაციულ მოთხოვნებს.',
      },
      {
        p: 'ჩვენი მომსახურება მოიცავს როგორც მარწმუნებელ, ისე არამარწმუნებელ მომსახურებებს, ისტორიული ფინანსური ინფორმაციის მიმოხილვასა და სხვა დაკავშირებულ სამუშაოებს.',
      },
      { h: 'აუდიტისა და მარწმუნებელი მომსახურების მიმართულებები' },
      {
        p: 'კლიენტის საჭიროებებისა და კონკრეტული ამოცანების შესაბამისად, ჩვენ შეგვიძლია შემოგთავაზოთ:',
      },
      {
        ul: [
          'ფინანსური ანგარიშგების შუალედური და წლიური მიმოხილვა;',
          'ფინანსური ანგარიშგების ცალკეული კომპონენტების აუდიტი ან მიმოხილვა;',
          'შეთანხმებული პროცედურების შესრულება;',
          'აუდიტისა და მიმოხილვისგან განსხვავებული მარწმუნებელი მომსახურება;',
          'ისტორიული ფინანსური ინფორმაციის შეფასება და მიმოხილვა;',
          'სხვა ინდივიდუალურად მორგებული აუდიტორული და საკონსულტაციო მომსახურება.',
        ],
      },
      {
        quote:
          'ჩვენი მიზანია, ფინანსური ინფორმაცია მხოლოდ ანგარიშგების ფორმალური მოთხოვნა არ იყოს — ის იქცეს სანდო საფუძვლად ბიზნესის მართვის, გადაწყვეტილებების მიღებისა და შემდგომი ზრდისთვის.',
      },
    ],
    en: [
      {
        p: "In today's fast-changing and competitive business environment, growing in international markets and expanding operations is increasingly important for companies. In this process, financial transparency and reliable information are especially valuable. The trust of investors, business partners and other stakeholders often determines a company's prospects for raising capital, seizing investment opportunities and listing on a stock exchange.",
      },
      {
        p: "The main objective of a financial statement audit is to obtain reasonable assurance, based on an independent assessment, that the financial statements are free from material misstatement and fairly present the company's financial position, financial performance and cash flows.",
      },
      {
        p: 'Our audit services help companies build a reliable and transparent financial information environment, which in turn strengthens the trust of investors, partners and other stakeholders.',
      },
      {
        p: "IG GROUP's team of professionals offers a wide range of audit and business advisory services tailored to each company's operations, goals and individual needs. Our approach takes into account the information needs of business owners and investors as well as regulators and other stakeholders.",
      },
      {
        p: 'Our services cover both assurance and non-assurance engagements, reviews of historical financial information and other related work.',
      },
      { h: 'Audit and assurance services' },
      { p: "Depending on the client's needs and specific objectives, we can offer:" },
      {
        ul: [
          'interim and annual reviews of financial statements;',
          'audits or reviews of individual components of financial statements;',
          'agreed-upon procedures;',
          'assurance engagements other than audits and reviews;',
          'assessment and review of historical financial information;',
          'other tailored audit and advisory services.',
        ],
      },
      {
        quote:
          'Our goal is for financial information to be more than a formal reporting requirement — a reliable foundation for managing the business, making decisions and growing further.',
      },
    ],
  },

  'audit/reporting-compilation': {
    ka: [
      {
        p: 'ფინანსური ანგარიშგების სათანადოდ წარმოება, მომზადება და წარდგენა ბიზნესის გამჭვირვალობისა და ფინანსური მართვის მნიშვნელოვანი ნაწილია. საქართველოში აღნიშნული პროცესები რეგულირდება ბუღალტრული აღრიცხვის, ანგარიშგებისა და აუდიტის შესახებ საქართველოს კანონით, რომელიც განსაზღვრავს როგორც ფინანსური ანგარიშგების მომზადებისა და წარდგენის, ისე აუდიტის ჩატარების ძირითად სამართლებრივ მოთხოვნებს.',
      },
      { p: 'კანონმდებლობა არეგულირებს:' },
      {
        ul: [
          'ბუღალტრული აღრიცხვისა და ანგარიშგების წარმოების ძირითად პრინციპებს;',
          'ფინანსური ანგარიშგების მომზადებისა და წარდგენის მოთხოვნებს;',
          'ფინანსური ანგარიშგების აუდიტის განხორციელების პირობებსა და შესაბამის პროცედურებს.',
        ],
      },
      {
        p: 'საქართველოში ბუღალტრული აღრიცხვისა და ფინანსური ანგარიშგების წარმოება ეფუძნება მოქმედ კანონმდებლობასა და შესაბამის ნორმატიულ აქტებს. ანგარიშგების მომზადებისას მნიშვნელოვანია შესაბამისი საერთაშორისო და ეროვნული სტანდარტების მოთხოვნების გათვალისწინება.',
      },
      {
        p: 'აღრიცხვის მოქმედი სტანდარტები მოიცავს როგორც საჯარო სექტორის, ისე კერძო სექტორის აღრიცხვის სტანდარტებს. კერძო სექტორში, მათ შორის, გამოიყენება ფინანსური ანგარიშგების საერთაშორისო სტანდარტები (IFRS), ფინანსური ანგარიშგების საერთაშორისო სტანდარტები მცირე და საშუალო საწარმოებისთვის (IFRS for SMEs) და არასამეწარმეო (არაკომერციული) იურიდიული პირებისთვის განსაზღვრული ადგილობრივი ფინანსური ანგარიშგების სტანდარტები.',
      },
      { h: 'ფინანსური ანგარიშგების მომზადება და კომპილაცია' },
      {
        p: 'კომპილაცია გულისხმობს კომპანიის ფინანსური ინფორმაციის საფუძველზე ფინანსური ანგარიშგების მომზადებას მოქმედი კანონმდებლობისა და შესაბამისი სააღრიცხვო სტანდარტების მოთხოვნების გათვალისწინებით.',
      },
      {
        p: 'სრულყოფილი, ზუსტი და სტანდარტებთან შესაბამისი ფინანსური ანგარიშგება ბიზნესს ეხმარება ფინანსური მდგომარეობის სწორად წარმოჩენაში, მენეჯმენტისთვის მნიშვნელოვანი გადაწყვეტილებების მიღებაში და ინვესტორებთან, პარტნიორებთან, ფინანსურ ინსტიტუტებსა და სხვა დაინტერესებულ მხარეებთან სანდო ურთიერთობის ჩამოყალიბებაში.',
      },
      {
        p: 'IG GROUP-ის გუნდი კლიენტებს სთავაზობს ფინანსური ანგარიშგებისა და კომპილაციის მომსახურების სრულ სპექტრს, რომელიც მორგებულია თითოეული კომპანიის საქმიანობის სფეროს, მასშტაბისა და ინდივიდუალური საჭიროებების შესაბამისად.',
      },
      {
        p: 'ჩვენი მომსახურება მიმართულია იმისკენ, რომ კლიენტებმა მიიღონ სწორად მომზადებული, სრულყოფილი და სანდო ფინანსური ინფორმაცია, რომელიც აკმაყოფილებს როგორც კანონმდებლობის, ისე შესაბამისი სააღრიცხვო სტანდარტების მოთხოვნებს.',
      },
      { h: 'ჩვენი მომსახურება მოიცავს' },
      {
        ul: [
          'ფინანსური ანგარიშგების მომზადებას;',
          'ფინანსური ინფორმაციის კომპილაციას;',
          'ფინანსური ანგარიშგების შესაბამისობის უზრუნველყოფას მოქმედ სტანდარტებთან;',
          'სააღრიცხვო მონაცემების ანალიზსა და დამუშავებას;',
          'ფინანსური ანგარიშგების წარდგენისთვის საჭირო პროცედურების მხარდაჭერას;',
          'კომპანიის ინდივიდუალურ საჭიროებებზე მორგებულ ფინანსურ და საკონსულტაციო მომსახურებას.',
        ],
      },
      {
        quote:
          'IG GROUP — ზუსტი ფინანსური ინფორმაცია, სანდო გადაწყვეტილებები, ბიზნესის მეტი შესაძლებლობა.',
      },
    ],
    en: [
      {
        p: 'Properly maintaining, preparing and submitting financial statements is an important part of business transparency and financial management. In Georgia these processes are governed by the Law of Georgia on Accounting, Reporting and Auditing, which sets out the core legal requirements both for preparing and submitting financial statements and for conducting audits.',
      },
      { p: 'The legislation regulates:' },
      {
        ul: [
          'the core principles of accounting and reporting;',
          'the requirements for preparing and submitting financial statements;',
          'the conditions and procedures for auditing financial statements.',
        ],
      },
      {
        p: 'Accounting and financial reporting in Georgia are based on current legislation and related regulations. When preparing financial statements it is important to follow the requirements of the applicable international and national standards.',
      },
      {
        p: 'The applicable standards cover both the public and the private sector. In the private sector these include International Financial Reporting Standards (IFRS), IFRS for Small and Medium-sized Entities (IFRS for SMEs) and local financial reporting standards for non-commercial legal entities.',
      },
      { h: 'Preparation and compilation of financial statements' },
      {
        p: "Compilation means preparing financial statements from the company's financial information in line with current legislation and the applicable accounting standards.",
      },
      {
        p: 'Complete, accurate and standards-compliant financial statements help a business present its financial position correctly, support key management decisions and build trusted relationships with investors, partners, financial institutions and other stakeholders.',
      },
      {
        p: "IG GROUP's team offers a full range of financial reporting and compilation services, tailored to each company's industry, scale and individual needs.",
      },
      {
        p: 'Our aim is for clients to receive properly prepared, complete and reliable financial information that meets the requirements of both the law and the applicable accounting standards.',
      },
      { h: 'Our services include' },
      {
        ul: [
          'preparation of financial statements;',
          'compilation of financial information;',
          'ensuring financial statements comply with applicable standards;',
          'analysis and processing of accounting data;',
          'support with the procedures required to submit financial statements;',
          'financial and advisory services tailored to the company’s needs.',
        ],
      },
      {
        quote:
          'IG GROUP — accurate financial information, reliable decisions, more opportunities for your business.',
      },
    ],
  },

  'tax/tax-consulting': {
    ka: [
      {
        p: 'ახალი ბიზნესის დაარსება და მასთან დაკავშირებული ნებისმიერი საქმიანობის წარმართვა ყოველთვის ბადებს საგადასახადო შესაბამისობის საკითხებს. ჩვენ გთავაზობთ შეუზღუდავ საგადასახადო კონსულტაციას თქვენთვის სასურველი ფორმატით.',
      },
      {
        p: 'ჩვენ შეგვიძლია გაგიწიოთ ზუსტად ის საგადასახადო მხარდაჭერა, რომელიც საჭიროა თქვენი მიზნების მისაღწევად: დაწყებული საგადასახადო კონსულტაციით, რომელიც დაგეხმარებათ კორპორატიული საგადასახადო სტრატეგიის დოკუმენტირებაში, დამთავრებული საგადასახადო შესაბამისობის ფუნქციების სრული აუთსორსინგით. ჩვენი ექსპერტი საგადასახადო მრჩევლები ერთდროულად უზრუნველყოფენ როგორც თქვენი ბიზნესის განვითარებას, ისე მის დაცვას საგადასახადო რისკებისგან.',
      },
      { h: 'სერვისი მოიცავს' },
      {
        ul: [
          'მიმდინარე კონსულტაციას',
          'ერთჯერად კონსულტაციას',
          'საგადასახადო დაგეგმვას',
          'წინასწარი გადაწყვეტილების მომზადებას',
        ],
      },
    ],
    en: [
      {
        p: 'Setting up a new business and running any related activity always raises tax compliance questions. We offer unlimited tax advice in the format that suits you.',
      },
      {
        p: 'We can provide exactly the tax support you need to reach your goals: from tax advice that helps you document your corporate tax strategy to full outsourcing of tax compliance functions. Our expert tax advisers support both the growth of your business and its protection from tax risks.',
      },
      { h: 'The service includes' },
      {
        ul: ['ongoing advice', 'one-off advice', 'tax planning', 'preparing advance rulings'],
      },
    ],
  },

  'tax/transaction-advisory': {
    ka: [
      { h: 'ტრანზაქციების საკონსულტაციო მომსახურება' },
      {
        p: 'ყოველი ბიზნესტრანზაქცია საკუთარ გამოწვევებთან ერთად ახალ საგადასახადო შესაძლებლობებსაც წარმოშობს.',
      },
      {
        p: 'IG GROUP-ის ტრანზაქციების საკონსულტაციო მომსახურება მოიცავს ტრანზაქციის სტრუქტურირებას, დიუ დილიჯენსს და რესტრუქტურიზაციის ან შესყიდვის შემდგომი ინტეგრაციისთვის საჭირო კონსულტაციებს. ჩვენი სპეციალისტები ფლობენ საჭირო კვალიფიკაციას, რათა გაითვალისწინონ თითოეული კლიენტის ინდივიდუალური საჭიროებები. ჩვენი მომსახურების მოდელი ეფუძნება გამჭვირვალე და მჭიდრო თანამშრომლობაზე დაფუძნებულ მიდგომას, რომლის საშუალებითაც ყველა ზომის კლიენტს ვუზიარებთ საგადასახადო სფეროში დაგროვილ ყოვლისმომცველ გამოცდილებას.',
      },
      { h: 'სერვისი მოიცავს' },
      {
        ul: [
          'წილის ან აქტივების შესყიდვის, გაყიდვის, შერწყმისა და სხვადასხვა სახის რეორგანიზაციის სტრუქტურირებას',
          'საგადასახადო მოდელირებასა და საგადასახადო შეღავათების ანალიზს',
          'დიუ დილიჯენსს როგორც მყიდველის, ისე გამყიდველის მხარისთვის',
          'რესტრუქტურიზაციის ან შესყიდვის შემდგომი ინტეგრაციისა და ოპტიმიზაციისთვის საჭირო კონსულტაციებს',
        ],
      },
    ],
    en: [
      { h: 'Transaction advisory services' },
      {
        p: 'Every business transaction brings new tax opportunities along with its own challenges.',
      },
      {
        p: "IG GROUP's transaction advisory covers deal structuring, due diligence and the advice needed for post-restructuring or post-acquisition integration. Our specialists have the expertise to address each client's individual needs. Our service model is built on transparent, close collaboration through which we share our extensive tax experience with clients of every size.",
      },
      { h: 'The service includes' },
      {
        ul: [
          'structuring share or asset acquisitions, disposals, mergers and other reorganisations',
          'tax modelling and analysis of tax incentives',
          'buy-side and sell-side due diligence',
          'advice on post-restructuring or post-acquisition integration and optimisation',
        ],
      },
    ],
  },

  'tax/tax-compliance': {
    ka: [
      {
        p: 'მომსახურების ფარგლებში ვიკვლევთ წარსული ან მიმდინარე (განსახილველი) პერიოდის სამეურნეო ოპერაციებს, რათა დავადგინოთ, რამდენად შეესაბამება კომპანიის საგადასახადო ანგარიშგება მოქმედ კანონმდებლობას. ამ მიზნით ვაანალიზებთ შესამოწმებელ პერიოდში განხორციელებულ ოპერაციებს, საგადასახადო ვალდებულებებისა და მათთან დაკავშირებული რისკების გამოსავლენად.',
      },
      {
        p: 'კვლევის შედეგად IG GROUP გაწვდით ინფორმაციას გამოვლენილი ხარვეზების, არსებული საგადასახადო რისკებისა და მათი აღმოფხვრის გზების შესახებ. ამასთან, გაგიზიარებთ რეკომენდაციებს გადასახადების მაქსიმალურად ოპტიმალური და ეფექტიანი მართვისთვის.',
      },
      {
        h: 'გადასახადების აუთსორსინგი დაგეხმარებათ, თქვენი ბიზნესი შეფერხების გარეშე წარმართოთ, რადგან IG GROUP:',
      },
      {
        ul: [
          'უზრუნველყოფს თქვენი საქმიანობის შესაბამისობას საგადასახადო კანონმდებლობასთან',
          'მართავს თქვენ მიერ გადასახდელ გადასახადებს',
          'ეფექტიანი საგადასახადო მიდგომებით აგებს თქვენი ინვესტიციების სტრუქტურას',
          'ამუშავებს ოპტიმალურ საგადასახადო სტრატეგიას დაგეგმილი ოპერაციებისთვის',
          'ზრუნავს იმაზე, რომ თქვენი საგადასახადო დაგეგმვა და ანგარიშგება გაუძლოს მარეგულირებელი ორგანოების დეტალურ შემოწმებას',
        ],
      },
    ],
    en: [
      {
        p: "Within this service we review business transactions for past or current periods to determine how far the company's tax reporting complies with current legislation. To do so, we analyse the transactions carried out in the period under review to identify tax liabilities and the related risks.",
      },
      {
        p: 'As a result, IG GROUP informs you of the gaps found, the existing tax risks and how to eliminate them. We also share recommendations for managing taxes as efficiently as possible.',
      },
      { h: 'Tax outsourcing helps you run your business without disruption, because IG GROUP:' },
      {
        ul: [
          'keeps your operations compliant with tax legislation',
          'manages the taxes you pay',
          'structures your investments with efficient tax approaches',
          'develops an optimal tax strategy for planned transactions',
          'makes sure your tax planning and reporting withstand detailed scrutiny by regulators',
        ],
      },
    ],
  },

  'tax/tax-disputes': {
    ka: [
      {
        p: 'ჩვენ დაგიცავთ თქვენს ინტერესებს საგადასახადო ორგანოების წინაშე, როგორც საგადასახადო შემოწმების, ისე საგადასახადო დავის ეტაპზე. შემოწმების პროცესში თქვენი სახელით ვიურთიერთებთ მაკონტროლებელ ორგანოებთან: ვამზადებთ და ვაწვდით მათ მიერ მოთხოვნილ ინფორმაციას, ვინარჩუნებთ უწყვეტ კომუნიკაციას და მათთან ერთად განვიხილავთ სადავო საკითხებს.',
      },
      {
        p: 'ამასთან, გვერდში დაგიდგებით საგადასახადო დავის წარმოების მთელ პროცესში: მოგიმზადებთ საჩივარს ყველა ინსტანციისთვის, გაგიწევთ წარმომადგენლობას ფინანსთა სამინისტროს სისტემაში დავის განხილვისას და გავუფრთხილდებით თქვენს ინტერესებს.',
      },
    ],
    en: [
      {
        p: 'We protect your interests before the tax authorities, both during tax audits and in tax disputes. During an audit we deal with the authorities on your behalf: we prepare and provide the information they request, keep communication ongoing and discuss disputed issues with them.',
      },
      {
        p: 'We also stand by you throughout the dispute: we prepare appeals for every level, represent you when the dispute is heard within the Ministry of Finance system and safeguard your interests.',
      },
    ],
  },

  'tax/tax-returns': {
    ka: [
      { h: 'დეკლარაციების მომზადების აუთსორსინგი' },
      {
        p: 'საგადასახადო დეკლარაციების მომზადება და მათი კანონით დადგენილ ვადებში წარდგენა ბიზნესისთვის უმნიშვნელოვანესი საკითხია.',
      },
      {
        p: 'გადასახადების გაანგარიშებისა და დეკლარაციის შევსებისას მრავალი დეტალის გათვალისწინებაა საჭირო. ოპერაციის შინაარსის არასწორმა კლასიფიკაციამ ან კანონის არასწორმა ინტერპრეტაციამ შესაძლოა ბიზნესს მნიშვნელოვანი ფინანსური და რეპუტაციული ზარალი მოუტანოს.',
      },
      {
        p: 'IG GROUP გთავაზობთ პროფესიონალი საგადასახადო გუნდის მხარდაჭერას დეკლარაციების მომზადების პროცესში, რაც მოიცავს ყოველთვიური ან/და ყოველწლიური გადასახადების გამოთვლას და დახმარებას დეკლარაციის წარდგენისას. გადასახადების აუთსორსინგი განსაკუთრებით მოსახერხებელია მსხვილი ბიზნესისთვის, სადაც ოპერაციების სიხშირე და მოცულობა ართულებს დეკლარაციისთვის საჭირო ინფორმაციის თავმოყრასა და ანალიზს.',
      },
      { h: 'რატომ საგადასახადო აუთსორსინგი?' },
      {
        p: 'IG GROUP-ში ჩვენი კვალიფიციური გუნდის ერთობლივი მუშაობა, მრავალფეროვანი ინდუსტრიული გამოცდილება, სამუშაო მეთოდოლოგია და მიდგომები საშუალებას გვაძლევს, არა მხოლოდ გამოთვლებში დაგეხმაროთ, არამედ თქვენი ბიზნეს მრჩევლებიც გავხდეთ. ჩვენი ექსპერტები დაგეხმარებიან საგადასახადო ვალდებულებების ოპტიმიზაციაში ისე, რომ კანონმდებლობასთან შესაბამისობაც შეინარჩუნოთ და ბიზნეს გადაწყვეტილებებიც მაქსიმალურად ეფექტიანად მიიღოთ.',
      },
      { h: 'გადასახადების აუთსორსინგი დაგეხმარებათ:' },
      {
        ul: [
          'დაზოგოთ თქვენი ფინანსური გუნდის რესურსები',
          'დარწმუნებული იყოთ წარდგენილი დეკლარაციის სიზუსტესა და სანდოობაში',
          'მინიმუმამდე დაიყვანოთ გადასახადებთან დაკავშირებული რისკები',
          'განახორციელოთ გადასახადების ოპტიმიზაცია',
          'მიიღოთ კვალიფიციური გუნდის მხარდაჭერა საგადასახადო ორგანოებთან ურთიერთობისა და შემოწმების დროს',
          'ვირტუალური სამუშაო სივრცის მეშვეობით რეალურ დროში ავტომატურად მიიღოთ სრული საგადასახადო ინფორმაცია',
        ],
      },
      {
        p: 'რუტინული საქმის მოცულობიდან გამომდინარე, კომპანიის ფინანსური გუნდისგან ყველაფრის ცოდნის მოთხოვნა ყოველთვის რეალისტური არ არის. ამიტომ ბიზნესისთვის მნიშვნელოვანია ექსპერტულ საგადასახადო ცოდნაზე წვდომა, მით უმეტეს იმ საკითხებში, რომელთა გადაჭრა შიდა რესურსით შეუძლებელია ან ძალიან რთულია.',
      },
    ],
    en: [
      { h: 'Outsourced tax return preparation' },
      {
        p: 'Preparing tax returns and filing them within the statutory deadlines is a critical matter for any business.',
      },
      {
        p: 'Calculating taxes and completing returns requires attention to many details. Misclassifying a transaction or misinterpreting the law can cause a business significant financial and reputational damage.',
      },
      {
        p: 'IG GROUP offers the support of a professional tax team in preparing returns, including calculating monthly and/or annual taxes and helping with filing. Tax outsourcing is especially convenient for large businesses, where the frequency and volume of transactions make it hard to gather and analyse the information a return requires.',
      },
      { h: 'Why outsource tax?' },
      {
        p: "At IG GROUP, our qualified team's collaboration, broad industry experience, methodology and approach allow us not only to help with calculations but to become your business advisers. Our experts help you optimise tax liabilities while staying compliant with the law and making business decisions as effectively as possible.",
      },
      { h: 'Tax outsourcing helps you:' },
      {
        ul: [
          "save your finance team's resources",
          'be confident in the accuracy and reliability of filed returns',
          'minimise tax-related risks',
          'optimise your taxes',
          'get a qualified team’s support in dealings with the tax authorities and during audits',
          'receive complete tax information automatically and in real time through a virtual workspace',
        ],
      },
      {
        p: "Given the volume of routine work, it is not always realistic to expect a company's finance team to know everything. That is why access to expert tax knowledge matters, especially for issues that are impossible or very hard to resolve in-house.",
      },
    ],
  },

  'outsourcing/bookkeeping': {
    ka: [
      {
        p: 'ბუღალტრული აღრიცხვის სპეციალისტები, რომლებიც ტექნიკურ და ინდუსტრიულ გამოცდილებას ეყრდნობიან, კომპანიის ფინანსურ მონაცემებს რეალურ დროში და ნებისმიერი ადგილიდან გაგიზიარებენ.',
      },
      { h: 'სერვისი მოიცავს' },
      {
        ul: [
          'საბუღალტრო ჩანაწერების მომზადებას',
          'საგადასახადო დეკლარაციების მომზადებასა და წარდგენას',
          'კონსულტაციას ფინანსურ და საგადასახადო საკითხებზე',
          'პირველადი დოკუმენტაციის მომზადებას',
          'საბანკო გადარიცხვების განხორციელებას',
          'პერიოდული ანგარიშგების მომზადებას',
          'ანგარიშგების წარდგენას ზედამხედველობის სამსახურში (SARAS)',
        ],
      },
    ],
    en: [
      {
        p: "Our accounting specialists, drawing on technical and industry experience, share your company's financial data in real time and from anywhere.",
      },
      { h: 'The service includes' },
      {
        ul: [
          'preparing accounting records',
          'preparing and filing tax returns',
          'advice on financial and tax matters',
          'preparing primary documentation',
          'making bank transfers',
          'preparing periodic reports',
          'filing reports with the supervisory service (SARAS)',
        ],
      },
    ],
  },

  'outsourcing/payroll': {
    ka: [
      {
        p: 'ბიზნესის ოპერირებისას ხშირად ჩნდება საკითხები, რომლებიც ხელფასების აღრიცხვას, თანამშრომელთა რაოდენობის ოპტიმიზაციასა და შიდა კონფიდენციალურობას უკავშირდება. სახელფასო აღრიცხვის სერვისი დაგეხმარებათ, შეამციროთ რუტინულ საქმეებზე დახარჯული დრო და რესურსები სტრატეგიულ მიზნებზე გადაანაწილოთ.',
      },
      {
        p: 'სახელფასო აღრიცხვა რთული პროცესია: იგი მოითხოვს განსხვავებული კომპეტენციის სპეციალისტების ჩართულობას, დეტალებისადმი ყურადღებას, შრომითი კანონმდებლობის ზედმიწევნით ცოდნასა და საკანონმდებლო ცვლილებებზე სწრაფ რეაგირებას. სწორედ ეს გარდაუვალი გამოწვევები ზრდის შეცდომების დაშვების ალბათობასა და მასთან დაკავშირებულ რისკებს.',
      },
      {
        p: 'IG GROUP-ში თქვენს პროექტზე იმუშავებს გუნდი, რომლის თითოეულ წევრს აქვს საჭირო ცოდნა და გამოცდილება, რათა მაღალი ხარისხის მომსახურება მიიღოთ.',
      },
      { h: 'IG GROUP-ის სახელფასო აღრიცხვის სერვისი 8 ძირითად ფუნქციას მოიცავს:' },
      {
        ol: [
          'სახელფასო უწყისის მომზადება',
          'წლიური შვებულების აღრიცხვა და გაანგარიშება საქართველოს კანონმდებლობის შესაბამისად',
          'სხვადასხვა სახის დანამატის (ბონუსი, ზეგანაკვეთური სამუშაო, კომუნიკაციის, ტრანსპორტისა და კვების ხარჯები და სხვა) გაანგარიშება და მასთან დაკავშირებული პირველადი დოკუმენტაციის მომზადება',
          'მივლინების ხარჯების გაანგარიშება და, საჭიროების შემთხვევაში, შესაბამისი დოკუმენტაციის მომზადება',
          'გადასახადების გაანგარიშება ნებისმიერი სახის განაცემზე',
          'საჭირო დეკლარაციების მომზადება მოქმედი კანონმდებლობის შესაბამისად',
          'საბანკო გადარიცხვების განხორციელება მოთხოვნისამებრ',
          'HR პროცესებთან დაკავშირებული საჭირო დოკუმენტაციის მომზადება',
        ],
      },
    ],
    en: [
      {
        p: 'Running a business often raises questions about payroll, headcount optimisation and internal confidentiality. Our payroll service helps you cut the time spent on routine work and redirect resources to strategic goals.',
      },
      {
        p: 'Payroll is a complex process: it requires specialists with different skills, attention to detail, thorough knowledge of labour law and quick response to legislative changes. These unavoidable challenges increase the likelihood of errors and the related risks.',
      },
      {
        p: 'At IG GROUP your project is handled by a team whose every member has the knowledge and experience needed to deliver high-quality service.',
      },
      { h: "IG GROUP's payroll service covers 8 core functions:" },
      {
        ol: [
          'preparing the payroll',
          'recording and calculating annual leave in line with Georgian law',
          'calculating allowances (bonuses, overtime, communication, transport, meal expenses and more) and preparing the related primary documents',
          'calculating business travel expenses and, where needed, preparing the documentation',
          'calculating taxes on any type of payment',
          'preparing the required returns in line with current legislation',
          'making bank transfers on request',
          'preparing documentation related to HR processes',
        ],
      },
    ],
  },

  'outsourcing/finance-manager': {
    ka: [
      {
        p: 'IG GROUP-ის ფინანსური მენეჯერის ფუნქცია კლიენტებს ეხმარება, ფინანსური ინფორმაცია სტრატეგიულ რესურსად აქციონ და ამით ბიზნესს რეალური ღირებულება შესძინონ. ჩვენ გეხმარებით მონაცემების დამუშავებაში, რაც უკეთეს დაგეგმვას, რესურსების ეფექტიან მართვასა და პროგნოზებზე დაფუძნებულ, პროაქტიულ გადაწყვეტილებებს უზრუნველყოფს.',
      },
      {
        p: 'მრავალი ინდუსტრიის გამოცდილებაზე დაყრდნობით, ბიზნესს ვთავაზობთ ყოვლისმომცველ საკონსულტაციო მხარდაჭერას: სტრატეგიის განსაზღვრიდან ეფექტიანობის ოპტიმიზაციამდე და მდგრადი ზრდის ხელშეწყობამდე.',
      },
      { h: 'IG GROUP-ის ფინანსური მენეჯერის ფუნქცია მოიცავს:' },
      {
        ul: [
          'დაგეგმვა და ბიუჯეტირება',
          'ფინანსური რეპორტინგი',
          'მონაცემთა ანალიზი და კონსულტაცია',
          'მესამე პირებთან კომუნიკაცია კლიენტის სახელით',
          'საათობრივი საკონსულტაციო სერვისები',
          'კვალიფიციური პერსონალით უზრუნველყოფა',
        ],
      },
      { h: 'ასევე გთავაზობთ ერთჯერად მომსახურებებს:' },
      {
        ul: [
          'ბიზნეს პროცესების ოპტიმიზაცია',
          'სააღრიცხვო პოლიტიკის შემუშავება',
          'ბიზნეს დიაგნოსტიკა',
          'ფინანსური ანგარიშგების მომზადება',
        ],
      },
      {
        quote:
          'ცვალებად გარემოში ბიზნესის სტაბილურობასა და გრძელვადიან წარმატებას განაპირობებს ფინანსური რესურსების ოპტიმალური მართვა, რისკების დროული გამოვლენა და ეფექტიანი მენეჯერული გადაწყვეტილებების მიღება.',
      },
    ],
    en: [
      {
        p: "IG GROUP's finance manager function helps clients turn financial information into a strategic resource that adds real value to the business. We help you process data so that you can plan better, manage resources efficiently and make proactive, forecast-based decisions.",
      },
      {
        p: 'Drawing on experience across many industries, we offer comprehensive advisory support: from defining strategy to optimising efficiency and supporting sustainable growth.',
      },
      { h: "IG GROUP's finance manager function includes:" },
      {
        ul: [
          'planning and budgeting',
          'financial reporting',
          'data analysis and advice',
          'communication with third parties on the client’s behalf',
          'hourly advisory services',
          'providing qualified staff',
        ],
      },
      { h: 'We also offer one-off services:' },
      {
        ul: [
          'business process optimisation',
          'developing accounting policies',
          'business diagnostics',
          'preparing financial statements',
        ],
      },
      {
        quote:
          'In a changing environment, business stability and long-term success depend on optimal management of financial resources, timely identification of risks and effective management decisions.',
      },
    ],
  },

  'outsourcing/chief-accountant': {
    ka: [
      {
        p: 'მთავარი ბუღალტრის ფუნქციის აუთსორსინგი, IG GROUP-ის პროფესიულ გამოცდილებასა და ადგილობრივ ექსპერტიზაზე დაყრდნობით, ბუღალტრული საქმიანობის წარმართვის ახალ სტანდარტებს ამკვიდრებს. ერთი მხრივ, ის გეხმარებათ საჭირო რესურსების დაზოგვასა და სწორად გადანაწილებაში, მეორე მხრივ კი გაძლევთ უნიკალურ შესაძლებლობას, დაიზღვიოთ საბუღალტრო რისკები და უზრუნველყოთ ბიზნესის უწყვეტობა.',
      },
      {
        p: 'სერვისის ფარგლებში მთავარი ბუღალტრის მომსახურებას მიიღებთ როგორც აუთსორსის ფორმატით, ისე უშუალოდ კომპანიაში, ადგილზე. IG GROUP-ის გამოცდილი გუნდი სრულ მხარდაჭერას გაგიწევთ ფინანსურ და საგადასახადო საკითხებში.',
      },
      { h: 'სერვისი მოიცავს' },
      {
        ul: [
          'მაღალკვალიფიციური მთავარი ბუღალტრის მომსახურებას',
          'კომპანიაში არსებული საბუღალტრო გუნდის ზედამხედველობას',
          'სამუშაო პროცესში ხარვეზების გამოვლენასა და პრობლემების ეფექტიან გადაჭრას',
          'სააღრიცხვო პოლიტიკის განსაზღვრას',
          'სააღრიცხვო სისტემის დანერგვას',
          'კომპანიის სახელით მესამე მხარეებთან ურთიერთობის ეფექტიან წარმართვას',
        ],
      },
      { h: 'დამატებით, IG GROUP-ის გუნდი გთავაზობთ:' },
      {
        ul: [
          'გასული სააღრიცხვო პერიოდის აღდგენას ან შემოწმებას და, საჭიროების შემთხვევაში, კორექტირებას',
          'ახალი სააღრიცხვო სისტემის დანერგვას',
          'მონაცემთა მიგრაციის პროცესის ოპტიმიზაციას',
        ],
      },
      { h: '5 მიზეზი, რატომ გამოირჩევა IG GROUP-ის მთავარი ბუღალტრის ფუნქციის აუთსორსინგი:' },
      {
        ol: [
          'საერთაშორისო სტანდარტები და ლოკალური ექსპერტიზა',
          'სტრუქტურირებული სამუშაო პროცესი და უწყვეტი კონტროლის ეფექტიანი მექანიზმები',
          'მაღალკვალიფიციური პროფესიონალების გუნდი',
          'პასუხისმგებლობის დაზღვევა',
          'საკანონმდებლო სიახლეებზე ზუსტი, დროული და უწყვეტი ინფორმაციის წვდომა',
        ],
      },
    ],
    en: [
      {
        p: "Outsourcing the chief accountant function, backed by IG GROUP's professional experience and local expertise, sets new standards for running accounting. It helps you save and allocate resources wisely, and gives you a unique opportunity to insure against accounting risks and ensure business continuity.",
      },
      {
        p: "You can receive chief accountant services either outsourced or on-site at your company. IG GROUP's experienced team gives you full support on financial and tax matters.",
      },
      { h: 'The service includes' },
      {
        ul: [
          'services of a highly qualified chief accountant',
          "supervision of the company's in-house accounting team",
          'identifying gaps in the workflow and resolving problems effectively',
          'defining accounting policies',
          'implementing an accounting system',
          'managing relations with third parties on the company’s behalf',
        ],
      },
      { h: "In addition, IG GROUP's team offers:" },
      {
        ul: [
          'restoring or reviewing past accounting periods and correcting them where needed',
          'implementing a new accounting system',
          'optimising data migration',
        ],
      },
      { h: "5 reasons IG GROUP's outsourced chief accountant stands out:" },
      {
        ol: [
          'international standards and local expertise',
          'a structured workflow and effective continuous controls',
          'a team of highly qualified professionals',
          'liability insurance',
          'accurate, timely and continuous access to legislative updates',
        ],
      },
    ],
  },

  'consulting/business-consulting': {
    ka: [
      {
        p: 'ჩვენი ბიზნეს კონსულტაციების ექსპერტები კლიენტებს მაღალი ხარისხის მომსახურებას სთავაზობენ და ამისთვის საგადასახადო და საბუღალტრო აღრიცხვის სფეროს გამოცდილ კონსულტანტებთან მჭიდროდ თანამშრომლობენ. ჩვენი სერვისები ყველა სექტორზეა მორგებული.',
      },
      {
        p: 'ჩვენი მიდგომის მთავარი პრინციპია, კლიენტებს დროული და მიზნობრივი კონსულტაცია მივაწოდოთ. მომსახურების პროცესს კვალიფიციური პერსონალი წარმართავს, რომელსაც მოლაპარაკებების წარმოებისა და საკითხების სწრაფად და ეფექტიანად გადაჭრის ფართო გამოცდილება აქვს.',
      },
      { h: 'შერწყმა და შეძენა' },
      {
        p: 'ჩვენი კორპორაციული ფინანსების გუნდი პროფესიულ კონსულტაციას გაგიწევთ როგორც შემძენი, ისე გამყიდველი მხარის ინტერესების გათვალისწინებით.',
      },
      { h: 'დიუ დილიჯენსი და ტრანზაქციებთან დაკავშირებული სერვისები' },
      {
        p: 'დიუ დილიჯენსი კომპანიისთვის შემოთავაზებულ ტრანზაქციებთან დაკავშირებული რისკებისა და შესაძლებლობების დამოუკიდებელ და ობიექტურ შეფასებას გთავაზობთ.',
      },
      { h: 'შეფასება' },
      {
        p: 'IG GROUP დაგეხმარებათ თქვენი ბიზნესის რეალური ღირებულების განსაზღვრაში, რაც ზუსტი და დასაბუთებული გადაწყვეტილებების მიღების საშუალებას მოგცემთ.',
      },
      { h: 'სხვა სერვისები' },
      {
        p: 'კორპორაციული ფინანსების დანარჩენი მიმართულებები მოიცავს ბაზრის კვლევას, ასევე კაპიტალის ბაზრებისა და დაფინანსების მოზიდვის საკითხებს.',
      },
    ],
    en: [
      {
        p: 'Our business advisory experts deliver high-quality services and work closely with experienced tax and accounting consultants to do so. Our services are tailored to every sector.',
      },
      {
        p: 'The core principle of our approach is to give clients timely, targeted advice. The work is led by qualified staff with broad experience in negotiations and in resolving issues quickly and effectively.',
      },
      { h: 'Mergers and acquisitions' },
      {
        p: 'Our corporate finance team provides professional advice to both buyers and sellers.',
      },
      { h: 'Due diligence and transaction services' },
      {
        p: 'Due diligence gives you an independent, objective assessment of the risks and opportunities of transactions proposed to your company.',
      },
      { h: 'Valuation' },
      {
        p: 'IG GROUP helps you determine the real value of your business so you can make accurate, well-founded decisions.',
      },
      { h: 'Other services' },
      {
        p: 'Other corporate finance areas include market research as well as capital markets and fundraising.',
      },
    ],
  },

  'consulting/litigation-support': {
    ka: [
      {
        p: 'გარე ან შიდა ფაქტორებით გამოწვეულმა შემთხვევებმა კომპანიას შესაძლოა ფინანსური ზიანი მიაყენოს. ასეთ დროს საჭირო ხდება ფინანსური დანაკარგის გაანგარიშება და კომპენსაციის მისაღებად სასამართლოში დავის დაწყება.',
      },
      { h: 'სერვისი მოიცავს' },
      {
        ul: [
          'ყველა რელევანტური დოკუმენტაციისა და საბუღალტრო ინფორმაციის შესწავლას',
          'საჭიროების შემთხვევაში, ფინანსური მოდელის აგებას პოტენციური შემოსავლისა და მოგების დასადგენად',
          'ანგარიშში საბოლოო შედეგის (მიუღებელი მოგების) ან მოსარჩელის არგუმენტების გამაბათილებელი ანალიზის წარდგენას',
        ],
      },
      { h: 'კომერციული დავების გადაწყვეტა' },
      {
        p: 'ჩვენი გუნდი დაგეხმარებათ ზარალისა და ფინანსური დანაკარგების განსაზღვრაში ბიზნესის ნებისმიერ სექტორსა და სხვადასხვა იურისდიქციაში.',
      },
      {
        p: 'ჩვენი სპეციალისტები სხვადასხვა მიმართულებით დაგროვილი ფართო გამოცდილებით გამოირჩევიან. მათ აქვთ სიღრმისეული ტექნიკური ცოდნა და უნარ-ჩვევები, რათა შემოგთავაზონ თქვენი პროცესების ექსპერტული ანალიზი და მტკიცებულებების სრულყოფილი შეფასება.',
      },
      {
        ul: [
          'საწყისი ინფორმაციის მიმოხილვასა და ვალდებულებების წინასწარ ანალიზს, ადმინისტრაციულ მხარდაჭერას (წინასასამართლო წერილები, საჩივრები, მოწმეთა ჩვენებები, ექსპერტი მოწმის მომსახურება)',
          'ზარალის გაანგარიშებას',
          'დამოუკიდებელ მოსაზრებას სააღრიცხვო საკითხებზე',
          'გადახდისუნარიანობის გამოძიებას',
          'გადახდისუუნარობასთან დაკავშირებული სასამართლო დავების წარმოებას',
        ],
      },
      { h: 'თაღლითობა და ფინანსური გამოძიება' },
      {
        p: 'როცა თქვენს ორგანიზაციას საფრთხე ემუქრება, სწრაფი მოქმედებაა საჭირო. IG GROUP-ის სასამართლო აღრიცხვის სპეციალისტები დაგეხმარებიან თაღლითობასა და კორუფციასთან დაკავშირებულ ყველაზე მაღალრისკიან სიტუაციებში, სააღრიცხვო უზუსტობების გასწორებაში, სასამართლო დავების გადაწყვეტაში, მონაცემთა აღდგენასა და შესაბამისობის ფართო სპექტრის საკითხებში.',
      },
      {
        ul: [
          'თაღლითობის, კორუფციისა და მექრთამეობის გამოძიებას',
          'აქტივების კვალის დადგენასა და დაბრუნებას',
          'ზარალის გამოთვლას',
          'დოსიეს კვლევასა და სტატისტიკურ შემოწმებას',
          'სპეციალიზებულ კონსულტაციას აღმასრულებელი საბჭოსთვის',
          'გარიგებებთან დაკავშირებულ მომსახურებას',
        ],
      },
    ],
    en: [
      {
        p: 'Events caused by external or internal factors can cause a company financial harm. In such cases the financial loss has to be calculated and a claim brought in court to obtain compensation.',
      },
      { h: 'The service includes' },
      {
        ul: [
          'reviewing all relevant documentation and accounting information',
          'where needed, building a financial model to determine potential revenue and profit',
          "presenting the final result (lost profit) in a report, or an analysis rebutting the claimant's arguments",
        ],
      },
      { h: 'Commercial dispute resolution' },
      {
        p: 'Our team helps you quantify damages and financial losses in any business sector and across jurisdictions.',
      },
      {
        p: 'Our specialists have broad experience across many areas, with the in-depth technical knowledge and skills to provide expert analysis of your processes and a thorough assessment of the evidence.',
      },
      {
        ul: [
          'initial information review and preliminary liability analysis, administrative support (pre-action letters, claims, witness statements, expert witness services)',
          'damages calculation',
          'independent opinions on accounting matters',
          'solvency investigations',
          'insolvency-related litigation',
        ],
      },
      { h: 'Fraud and financial investigations' },
      {
        p: "When your organisation is under threat, you need to act fast. IG GROUP's forensic accounting specialists help in the highest-risk situations involving fraud and corruption, in correcting accounting misstatements, resolving disputes, recovering data and a wide range of compliance matters.",
      },
      {
        ul: [
          'fraud, corruption and bribery investigations',
          'asset tracing and recovery',
          'loss quantification',
          'background research and statistical testing',
          'specialised advice to the executive board',
          'transaction-related services',
        ],
      },
    ],
  },

  'consulting/risk-consulting': {
    ka: [
      {
        p: 'გთავაზობთ რისკ კონსულტაციების მომსახურებას რამდენიმე მიმართულებით, როგორც ცალ-ცალკე, ისე კომბინირებულად:',
      },
      {
        ul: [
          'რისკების მართვისა და კონტროლის პროცესების გაძლიერებას',
          'შიდა აუდიტს',
          'რეგულაციებთან შესაბამისობას',
        ],
      },
    ],
    en: [
      { p: 'We offer risk advisory services in several areas, separately or combined:' },
      {
        ul: [
          'strengthening risk management and control processes',
          'internal audit',
          'regulatory compliance',
        ],
      },
    ],
  },
}
