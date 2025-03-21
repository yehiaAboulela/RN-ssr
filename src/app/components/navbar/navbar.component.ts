import { Component, OnInit, Renderer2 } from '@angular/core';
import { LanguageService } from './../../shared/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private LanguageService: LanguageService
  ) {}
  lang: string = '';
  nav: boolean = false;
  isNavbarHidden = false;

  ngOnInit() {
    this.LanguageService.lang.subscribe({
      next: (lang) => {
        this.lang = lang;
        // if (lang == 'ar') {
        //   this.BlogsService.blogs.next([
        //     {
        //       label: 'إعلان',
        //       heading: 'لماذا يعتبر طلاء السيراميك الخيار الأفضل لسيارتك',
        //       subHeading:
        //         'اكتشف لماذا يعتبر طلاء السيراميك من رويال نانو الحل الأمثل لحماية السيارة والحفاظ على لمعانها.',
        //       date: '3 يوليو 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498e834cf1afb7a9073b8_slice-blog-cover-image-4.jpg',
        //       points: [
        //         {
        //           head: 'ما هو طلاء السيراميك؟',
        //           body: 'طلاء السيراميك هو بوليمر سائل يُطبق على الأسطح الخارجية لسيارتك. يشكل طبقة واقية ترتبط بالطلاء، مما يوفر حماية فائقة ضد الخدوش، والبقع الكيميائية، وأضرار الأشعة فوق البنفسجية، مع تحسين اللمعان والتألق لمركبتك.',
        //         },
        //         {
        //           head: 'فوائد اختيار رويال نانو سيراميك',
        //           body: 'يقدم رويال نانو سيراميك طلاء سيراميك عالي الجودة يدوم لفترة أطول ويوفر حماية أفضل مقارنة بالشمع التقليدي أو المواد المانعة للتسرب. تركيبتنا تخلق طبقة كارهة للماء تطرد الماء وتمنع تراكم الأوساخ والغبار، مما يجعل تنظيف وصيانة سيارتك أسهل.',
        //         },
        //         {
        //           head: 'حماية تدوم طويلاً',
        //           body: 'على عكس الشمع التقليدي الذي يتلاشى بعد بضعة أشهر، يمكن أن تدوم طبقات طلاء رويال نانو سيراميك لسنوات. مع الصيانة المناسبة، تبقى الطلاءات سليمة، مما يحمي طلاء سيارتك ويحافظ على مظهرها مثل السيارات الجديدة.',
        //         },
        //         {
        //           head: 'زيادة القيمة والجماليات',
        //           body: 'الاستثمار في طلاء السيراميك لا يحسن فقط جماليات سيارتك، بل يحافظ أيضًا على قيمتها. يضمن اللمعان المعزز، وعمق اللون، والحماية طويلة الأمد التي توفرها طلاءاتنا أن تبدو سيارتك مذهلة وتبقى محمية لسنوات قادمة.',
        //         },
        //       ],
        //       id: 1,
        //     },
        //     {
        //       label: 'إعلان',
        //       heading: 'كيفية الحفاظ على سيارتك بعد تطبيق طلاء السيراميك',
        //       subHeading:
        //         'احصل على نصائح حول كيفية العناية بسيارتك بعد تطبيق طلاء رويال نانو سيراميك لتعزيز متانتها ومظهرها.',
        //       date: '10 أغسطس 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749804f4b1dafd3ae7ba6a_olivia-blog-cover-image-2.jpg',
        //       points: [
        //         {
        //           head: 'استخدم منتجات غسيل السيارات ذات الرقم الهيدروجيني المتعادل',
        //           body: 'للحفاظ على سيارتك المدهونة بالسيراميك، من المهم استخدام منتجات غسيل سيارات ذات الرقم الهيدروجيني المتعادل. يمكن أن تؤدي المواد الكيميائية القاسية إلى تدهور الطلاء مع مرور الوقت. سيضمن الشامبو اللطيف بقاء الطلاء سليماً والحفاظ على خصائصه الكارهة للماء.',
        //         },
        //         {
        //           head: 'تجنب غسيل السيارات الآلي',
        //           body: 'يمكن أن تتسبب غسيل السيارات الآلي في خدوش دقيقة وتدهور فعالية طلاء السيراميك. من الأفضل غسل سيارتك يدويًا باستخدام قفاز ميكروفايبر لضمان تنظيف شامل وآمن.',
        //         },
        //         {
        //           head: 'تحقق بانتظام من الملوثات',
        //           body: 'حتى مع طلاء السيراميك، يمكن أن تتجمع ملوثات مثل القار أو صمغ الأشجار على السطح. تحقق بانتظام من سيارتك واستخدم بار الطين لإزالة هذه الملوثات دون إتلاف الطلاء.',
        //         },
        //         {
        //           head: 'تطبيق معززات السيراميك',
        //           body: 'للحفاظ على اللمعان والمتانة للطلاء، قم بتطبيق معزز سيراميك كل بضعة أشهر. هذه المعززات تجدد الطبقة الكارهة للماء وتعزز الأداء العام للطلاء.',
        //         },
        //       ],
        //       id: 2,
        //     },
        //     {
        //       label: 'إعلان',
        //       heading: 'رويال نانو سيراميك: أفضل حل لحماية طلاء السيارة',
        //       subHeading:
        //         'اكتشف لماذا يعتبر رويال نانو سيراميك اسمًا موثوقًا في صناعة السيارات لحلول حماية الطلاء عالية الجودة.',
        //       date: '5 سبتمبر 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637497f54ceb7489efe5e308_olivia-blog-cover-image-1.jpg',
        //       points: [
        //         {
        //           head: 'حماية لا مثيل لها ضد الأضرار البيئية',
        //           body: 'تقدم طبقات رويال نانو سيراميك حماية لا مثيل لها ضد العناصر البيئية الضارة مثل الأمطار الحمضية، وبراز الطيور، وأشعة الشمس القاسية. تمنع طلاءاتنا أكسدة الطلاء وتغير لونه، مما يحافظ على مظهر سيارتك جديدة.',
        //         },
        //         {
        //           head: 'مقاومة للخدوش والمتانة',
        //           body: 'تم تصميم طلاءاتنا السيراميكية لمقاومة الخدوش الطفيفة وعلامات الدوران التي تحدث أثناء غسل السيارات المنتظم. تضمن الطبقة المتينة بقاء طلاء سيارتك في حالة ممتازة ومحمي بشكل جيد.',
        //         },
        //         {
        //           head: 'تطبيق احترافي للحصول على أقصى النتائج',
        //           body: 'يقوم محترفونا المدربون بتطبيق طلاء السيراميك باستخدام تقنيات دقيقة لتحقيق طبقة متساوية وأقصى ارتباط. هذا يضمن أفضل النتائج وحماية طويلة الأمد لطلاء سيارتك.',
        //         },
        //         {
        //           head: 'حل فعال من حيث التكلفة',
        //           body: 'مع رويال نانو سيراميك، تحصل على حماية طلاء فاخرة بسعر فعال من حيث التكلفة. توفر المدخرات على صيانة السيارة وإعادة الطلاء استثمارًا مجديًا لعشاق السيارات والسائقين العاديين على حد سواء.',
        //         },
        //       ],
        //       id: 3,
        //     },
        //     {
        //       label: 'إعلان',
        //       heading:
        //         'لماذا يعد التنظيف المنتظم أمرًا حيويًا للسيارات المدهونة بالسيراميك',
        //       subHeading:
        //         'استكشف أهمية التنظيف المنتظم للحفاظ على جودة وفعالية طلاء رويال نانو سيراميك.',
        //       date: '12 أكتوبر 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749819fb7e46504d281040_olivia-blog-cover-image-5.jpg',
        //       points: [
        //         {
        //           head: 'يحافظ على نظافة الطلاء وفعاليته',
        //           body: 'يضمن التنظيف المنتظم أن يظل طلاء السيراميك نظيفًا وخاليًا من الملوثات. يمكن أن تقلل الغبار والأوساخ من خصائص الطلاء الكارهة للماء، مما يجعل التنظيف المنتظم ضروريًا.',
        //         },
        //         {
        //           head: 'يعزز من عمر الطلاء',
        //           body: 'من خلال الحفاظ على سيارتك المدهونة بالسيراميك بانتظام، تعزز من عمر الطلاء. هذا يعني أن حماية الطلاء تدوم لفترة أطول، وتحافظ على مظهر سيارتك كالجديدة لسنوات.',
        //         },
        //         {
        //           head: 'يستعيد الخصائص الكارهة للماء',
        //           body: 'مع مرور الوقت، قد تتناقص الخصائص الكارهة للماء للطلاء. يساعد التنظيف المنتظم على استعادة هذه الخصائص، مما يضمن استمرار انزلاق الماء وعدم التصاق الملوثات بالسطح.',
        //         },
        //         {
        //           head: 'يمنع الأضرار المحتملة',
        //           body: 'يساعد التنظيف الاحترافي على تحديد المشاكل المحتملة مبكرًا، مثل النقوش الناتجة عن بقع الماء أو تراكم الملوثات. معالجة هذه المشكلات على الفور تمنع الأضرار طويلة الأمد وتحافظ على جودة الطلاء.',
        //         },
        //       ],
        //       id: 4,
        //     },
        //     {
        //       label: 'إعلان',
        //       heading: 'رويال نانو سيراميك: دليل لحماية طلاء السيارة (PPF)',
        //       subHeading:
        //         'تعرف على كيفية حماية فيلم حماية الطلاء (PPF) من رويال نانو سيراميك لأجزاء السيارة المعرضة للخطر.',
        //       date: '1 نوفمبر 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498bd34cf1ad081906caa_slice-blog-cover-image-5.jpg',
        //       points: [
        //         {
        //           head: 'ما هو فيلم حماية الطلاء؟',
        //           body: 'فيلم حماية الطلاء (PPF) هو طبقة شفافة من البولي يوريثان تُطبق على سطح سيارتك. يوفر حماية ممتازة ضد رقائق الصخور، والخدوش، والحطام الطرقي، مع الحفاظ على المظهر الأصلي لسيارتك.',
        //         },
        //         {
        //           head: 'فوائد PPF لسيارتك',
        //           body: 'يعد PPF مثاليًا لحماية المناطق المعرضة للصدمات مثل المصد الأمامي، وغطاء المحرك، والمرايا الجانبية. يمتص الصدمات، ويمنع تلف الطلاء، ويقدم خصائص الشفاء الذاتي التي تزيل الخدوش الطفيفة عند تعرضها للحرارة.',
        //         },
        //         {
        //           head: 'فيلم PPF الممتاز من رويال نانو سيراميك',
        //           body: 'صُمم فيلم PPF الممتاز لدينا لتوفير حماية فائقة ووضوح. مع قدرات الشفاء الذاتي المتقدمة والحماية من الأشعة فوق البنفسجية، يضمن أن يظل طلاء سيارتك محميًا ويحافظ على تألقه.',
        //         },
        //         {
        //           head: 'مثالي للسيارات عالية القيمة والسائقين اليوميين',
        //           body: 'سواء كنت تقود سيارة فاخرة أو مركبة يومية، يوفر PPF حلاً قويًا لحماية الطلاء. إنه مفيد بشكل خاص للحفاظ على قيمة إعادة البيع للسيارات الفاخرة.',
        //         },
        //       ],
        //       id: 5,
        //     },
        //     {
        //       label: 'إعلان',
        //       heading: 'كيفية اختيار طلاء السيراميك المناسب لسيارتك',
        //       subHeading:
        //         'مع وجود العديد من الخيارات المتاحة، قد يكون اختيار طلاء السيراميك المناسب تحديًا. يبسط هذا الدليل العملية.',
        //       date: '5 ديسمبر 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498f6fb7e4659ef282104_slice-blog-cover-image-6.jpg',
        //       points: [
        //         {
        //           head: 'فهم أنواع طلاء السيراميك المختلفة',
        //           body: 'ليست جميع طلاءات السيراميك متساوية. تعرف على الأنواع المختلفة مثل طلاءات 9H، وطلاءات SiO2، وطلاءات محورة بالغرافين، وكيف تؤثر على حماية سيارتك ومظهرها.',
        //         },
        //         {
        //           head: 'اختيار الطلاء المناسب لاحتياجاتك',
        //           body: 'ضع في اعتبارك عوامل مثل المتانة، ومستوى اللمعان، ومتطلبات الصيانة عند اختيار طلاء السيراميك. تقدم رويال نانو سيراميك خيارات متنوعة تناسب احتياجات مختلفة، سواء كنت ترغب في أقصى حماية أو لمسة لامعة.',
        //         },
        //         {
        //           head: 'طلاءات احترافية مقابل DIY',
        //           body: 'بينما تتوفر طلاءات DIY، يضمن التطبيق الاحترافي نتائج أفضل وطول عمر. يضمن فنيو التصديق لدينا تطبيقًا خاليًا من العيوب وحماية طويلة الأمد لطلاء سيارتك.',
        //         },
        //         {
        //           head: 'التكلفة مقابل القيمة: اتخاذ قرار مستنير',
        //           body: 'افهم الفروقات في التكلفة بين طلاءات السيراميك من المستوى الأول وطلاءات السيراميك الممتازة. قد يبدو الاستثمار في طلاء عالي الجودة مكلفًا في البداية، ولكنه يوفر فوائد على المدى الطويل من حيث تكاليف الصيانة المنخفضة والحماية المعززة للطلاء.',
        //         },
        //       ],
        //       id: 6,
        //     },
        //   ]);
        // } else if (lang === 'en') {
        //   this.BlogsService.blogs.next([
        //     {
        //       label: 'Announcement',
        //       heading: 'Why Ceramic Coating is the Best Choice for Your Car',
        //       subHeading:
        //         'Learn why Royal Nano Ceramic coating is the ultimate solution for car protection and maintaining your vehicle’s shine.',
        //       date: 'July 3, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498e834cf1afb7a9073b8_slice-blog-cover-image-4.jpg',
        //       points: [
        //         {
        //           head: 'What is Ceramic Coating?',
        //           body: 'Ceramic coating is a liquid polymer that is applied to the exterior surfaces of your car. It forms a protective layer that bonds with the paint, providing superior protection against scratches, chemical stains, and UV damage, while also enhancing the gloss and shine of your vehicle.',
        //         },
        //         {
        //           head: 'Benefits of Choosing Royal Nano Ceramic',
        //           body: 'Royal Nano Ceramic offers a premium quality ceramic coating that lasts longer and provides better protection compared to conventional wax or sealants. Our formula creates a hydrophobic layer that repels water and prevents dirt and grime buildup, making your car easier to clean and maintain.',
        //         },
        //         {
        //           head: 'Long-lasting Protection',
        //           body: 'Unlike traditional wax that wears off after a few months, Royal Nano Ceramic coatings can last for years. With proper maintenance, the coating remains intact, protecting your car’s paintwork and maintaining its showroom-like appearance.',
        //         },
        //         {
        //           head: 'Enhanced Value and Aesthetics',
        //           body: 'Investing in a ceramic coating not only improves the aesthetics of your car but also preserves its value. The enhanced shine, color depth, and long-lasting protection provided by our coatings ensure that your vehicle looks stunning and remains protected for years to come.',
        //         },
        //       ],
        //       id: 1,
        //     },
        //     {
        //       label: 'Announcement',
        //       heading:
        //         'How to Maintain Your Car After a Ceramic Coating Application',
        //       subHeading:
        //         'Get tips on how to take care of your car after applying Royal Nano Ceramic coatings to maximize its durability and appearance.',
        //       date: 'August 10, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749804f4b1dafd3ae7ba6a_olivia-blog-cover-image-2.jpg',
        //       points: [
        //         {
        //           head: 'Use pH-Neutral Car Wash Products',
        //           body: 'To maintain your ceramic-coated car, it’s important to use pH-neutral car wash products. Harsh chemicals can degrade the coating over time. A gentle shampoo will ensure the coating stays intact and maintains its hydrophobic properties.',
        //         },
        //         {
        //           head: 'Avoid Automatic Car Washes',
        //           body: 'Automatic car washes can cause micro-scratches and degrade the ceramic coating’s effectiveness. It’s best to wash your car by hand using a microfiber mitt to ensure a thorough and safe clean.',
        //         },
        //         {
        //           head: 'Regularly Check for Contaminants',
        //           body: 'Even with a ceramic coating, contaminants like tar or tree sap can bond to the surface. Regularly inspect your car and use a clay bar to remove these contaminants without damaging the coating.',
        //         },
        //         {
        //           head: 'Apply Ceramic Boosters',
        //           body: 'To maintain the shine and durability of the coating, apply a ceramic booster every few months. These boosters replenish the hydrophobic layer and enhance the overall performance of the coating.',
        //         },
        //       ],
        //       id: 2,
        //     },
        //     {
        //       label: 'Announcement',
        //       heading:
        //         'Royal Nano Ceramic: The Best Solution for Car Paint Protection',
        //       subHeading:
        //         'Discover why Royal Nano Ceramic is a trusted name in the automotive industry for premium paint protection solutions.',
        //       date: 'September 5, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637497f54ceb7489efe5e308_olivia-blog-cover-image-1.jpg',
        //       points: [
        //         {
        //           head: 'Unmatched Protection Against Environmental Damage',
        //           body: 'Royal Nano Ceramic coatings offer unmatched protection against harmful environmental elements such as acid rain, bird droppings, and harsh sunlight. Our coatings prevent paint oxidation and discoloration, keeping your car looking new.',
        //         },
        //         {
        //           head: 'Scratch Resistance and Durability',
        //           body: 'Our ceramic coatings are engineered to resist minor scratches and swirl marks that occur during regular car washing. The durable layer ensures your car’s paint remains pristine and well-protected.',
        //         },
        //         {
        //           head: 'Professional Application for Maximum Results',
        //           body: 'Our trained professionals apply the ceramic coating using precise techniques to achieve an even layer and maximum bond. This guarantees the best results and long-lasting protection for your car’s paintwork.',
        //         },
        //         {
        //           head: 'Affordable and Cost-Effective Solution',
        //           body: 'With Royal Nano Ceramic, you get premium paint protection at a cost-effective price. The long-term savings on car maintenance and repainting make it a worthwhile investment for car enthusiasts and everyday drivers alike.',
        //         },
        //       ],
        //       id: 3,
        //     },
        //     {
        //       label: 'Announcement',
        //       heading:
        //         'Why Regular Detailing is Crucial for Ceramic-Coated Cars',
        //       subHeading:
        //         'Explore the importance of regular detailing to preserve the quality and effectiveness of your Royal Nano Ceramic coating.',
        //       date: 'October 12, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749819fb7e46504d281040_olivia-blog-cover-image-5.jpg',
        //       points: [
        //         {
        //           head: 'Keeps Your Coating Clean and Effective',
        //           body: 'Regular detailing ensures that the ceramic coating remains clean and free from contaminants. Dust, dirt, and grime can diminish the hydrophobic properties, making it essential to clean the car regularly.',
        //         },
        //         {
        //           head: 'Enhances the Coating’s Longevity',
        //           body: 'By regularly maintaining your ceramic-coated vehicle, you enhance the longevity of the coating. This means the paint protection lasts longer, and your car retains its new-car appearance for years.',
        //         },
        //         {
        //           head: 'Restores Hydrophobic Properties',
        //           body: 'Over time, the hydrophobic properties of the coating may diminish. Detailing helps restore these properties, ensuring that water continues to bead off and contaminants don’t stick to the surface.',
        //         },
        //         {
        //           head: 'Prevents Potential Damage',
        //           body: 'Professional detailing helps identify potential issues early on, such as etching caused by water spots or contamination buildup. Addressing these issues promptly prevents long-term damage and keeps your coating in top condition.',
        //         },
        //       ],
        //       id: 4,
        //     },
        //     {
        //       label: 'Announcement',
        //       heading:
        //         'Royal Nano Ceramic: A Guide to Paint Protection Film (PPF)',
        //       subHeading:
        //         'Learn how Paint Protection Film (PPF) from Royal Nano Ceramic can safeguard your vehicle’s vulnerable areas.',
        //       date: 'November 1, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498bd34cf1ad081906caa_slice-blog-cover-image-5.jpg',
        //       points: [
        //         {
        //           head: 'What is Paint Protection Film?',
        //           body: 'Paint Protection Film (PPF) is a transparent layer of polyurethane applied to your car’s surface. It provides excellent protection against rock chips, scratches, and road debris, while maintaining your car’s original look.',
        //         },
        //         {
        //           head: 'Benefits of PPF for Your Car',
        //           body: 'PPF is ideal for protecting high-impact areas such as the front bumper, hood, and side mirrors. It absorbs impact, prevents paint damage, and offers self-healing properties that remove minor scratches with heat exposure.',
        //         },
        //         {
        //           head: 'Royal Nano Ceramic’s Premium PPF',
        //           body: 'Our premium PPF is designed to offer superior protection and clarity. With advanced self-healing capabilities and UV protection, it ensures your car’s paint remains protected and maintains its brilliance.',
        //         },
        //         {
        //           head: 'Ideal for High-Value Cars and Daily Drivers',
        //           body: 'Whether you drive a luxury car or a daily commuter, PPF provides a robust solution for paint protection. It is especially useful for preserving the resale value of high-end vehicles.',
        //         },
        //       ],
        //       id: 5,
        //     },
        //     {
        //       label: 'Announcement',
        //       heading: 'How to Choose the Right Ceramic Coating for Your Car',
        //       subHeading:
        //         'With so many options available, choosing the right ceramic coating can be challenging. This guide simplifies the process.',
        //       date: 'December 5, 2024',
        //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498f6fb7e4659ef282104_slice-blog-cover-image-6.jpg',
        //       points: [
        //         {
        //           head: 'Understanding Different Types of Ceramic Coatings',
        //           body: 'Not all ceramic coatings are created equal. Learn about different types such as 9H coatings, SiO2-based coatings, and graphene-infused coatings, and how they impact your car’s protection and appearance.',
        //         },
        //         {
        //           head: 'Choosing the Right Coating for Your Needs',
        //           body: 'Consider factors such as durability, gloss level, and maintenance requirements when selecting a ceramic coating. Royal Nano Ceramic offers various options to suit different needs, whether you want maximum protection or a glossy finish.',
        //         },
        //         {
        //           head: 'Professional vs. DIY Coatings',
        //           body: 'While DIY coatings are available, professional application ensures better results and longevity. Our certified technicians ensure a flawless application and long-lasting protection for your car’s paint.',
        //         },
        //         {
        //           head: 'Cost vs. Value: Making an Informed Decision',
        //           body: 'Understand the cost differences between entry-level and premium ceramic coatings. Investing in a high-quality coating may seem expensive initially, but it pays off with lower maintenance costs and enhanced paint protection.',
        //         },
        //       ],
        //       id: 6,
        //     },
        //   ]);
        // }
      },
    });
  }

  changeLang(userLang: string) {
    this.LanguageService.lang.next(userLang);
    localStorage.setItem('lang', this.lang);

    this.renderer.removeClass(document.body, 'lang-en');
    this.renderer.removeClass(document.body, 'lang-ar');

    this.renderer.addClass(document.body, `lang-${userLang}`);

    // if (userLang == 'ar') {
    //   this.BlogsService.blogs.next([
    //     {
    //       label: 'إعلان',
    //       heading: 'لماذا يعتبر طلاء السيراميك الخيار الأفضل لسيارتك',
    //       subHeading:
    //         'اكتشف لماذا يعتبر طلاء السيراميك من رويال نانو الحل الأمثل لحماية السيارة والحفاظ على لمعانها.',
    //       date: '3 يوليو 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498e834cf1afb7a9073b8_slice-blog-cover-image-4.jpg',
    //       points: [
    //         {
    //           head: 'ما هو طلاء السيراميك؟',
    //           body: 'طلاء السيراميك هو بوليمر سائل يُطبق على الأسطح الخارجية لسيارتك. يشكل طبقة واقية ترتبط بالطلاء، مما يوفر حماية فائقة ضد الخدوش، والبقع الكيميائية، وأضرار الأشعة فوق البنفسجية، مع تحسين اللمعان والتألق لمركبتك.',
    //         },
    //         {
    //           head: 'فوائد اختيار رويال نانو سيراميك',
    //           body: 'يقدم رويال نانو سيراميك طلاء سيراميك عالي الجودة يدوم لفترة أطول ويوفر حماية أفضل مقارنة بالشمع التقليدي أو المواد المانعة للتسرب. تركيبتنا تخلق طبقة كارهة للماء تطرد الماء وتمنع تراكم الأوساخ والغبار، مما يجعل تنظيف وصيانة سيارتك أسهل.',
    //         },
    //         {
    //           head: 'حماية تدوم طويلاً',
    //           body: 'على عكس الشمع التقليدي الذي يتلاشى بعد بضعة أشهر، يمكن أن تدوم طبقات طلاء رويال نانو سيراميك لسنوات. مع الصيانة المناسبة، تبقى الطلاءات سليمة، مما يحمي طلاء سيارتك ويحافظ على مظهرها مثل السيارات الجديدة.',
    //         },
    //         {
    //           head: 'زيادة القيمة والجماليات',
    //           body: 'الاستثمار في طلاء السيراميك لا يحسن فقط جماليات سيارتك، بل يحافظ أيضًا على قيمتها. يضمن اللمعان المعزز، وعمق اللون، والحماية طويلة الأمد التي توفرها طلاءاتنا أن تبدو سيارتك مذهلة وتبقى محمية لسنوات قادمة.',
    //         },
    //       ],
    //       id: 1,
    //     },
    //     {
    //       label: 'إعلان',
    //       heading: 'كيفية الحفاظ على سيارتك بعد تطبيق طلاء السيراميك',
    //       subHeading:
    //         'احصل على نصائح حول كيفية العناية بسيارتك بعد تطبيق طلاء رويال نانو سيراميك لتعزيز متانتها ومظهرها.',
    //       date: '10 أغسطس 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749804f4b1dafd3ae7ba6a_olivia-blog-cover-image-2.jpg',
    //       points: [
    //         {
    //           head: 'استخدم منتجات غسيل السيارات ذات الرقم الهيدروجيني المتعادل',
    //           body: 'للحفاظ على سيارتك المدهونة بالسيراميك، من المهم استخدام منتجات غسيل سيارات ذات الرقم الهيدروجيني المتعادل. يمكن أن تؤدي المواد الكيميائية القاسية إلى تدهور الطلاء مع مرور الوقت. سيضمن الشامبو اللطيف بقاء الطلاء سليماً والحفاظ على خصائصه الكارهة للماء.',
    //         },
    //         {
    //           head: 'تجنب غسيل السيارات الآلي',
    //           body: 'يمكن أن تتسبب غسيل السيارات الآلي في خدوش دقيقة وتدهور فعالية طلاء السيراميك. من الأفضل غسل سيارتك يدويًا باستخدام قفاز ميكروفايبر لضمان تنظيف شامل وآمن.',
    //         },
    //         {
    //           head: 'تحقق بانتظام من الملوثات',
    //           body: 'حتى مع طلاء السيراميك، يمكن أن تتجمع ملوثات مثل القار أو صمغ الأشجار على السطح. تحقق بانتظام من سيارتك واستخدم بار الطين لإزالة هذه الملوثات دون إتلاف الطلاء.',
    //         },
    //         {
    //           head: 'تطبيق معززات السيراميك',
    //           body: 'للحفاظ على اللمعان والمتانة للطلاء، قم بتطبيق معزز سيراميك كل بضعة أشهر. هذه المعززات تجدد الطبقة الكارهة للماء وتعزز الأداء العام للطلاء.',
    //         },
    //       ],
    //       id: 2,
    //     },
    //     {
    //       label: 'إعلان',
    //       heading: 'رويال نانو سيراميك: أفضل حل لحماية طلاء السيارة',
    //       subHeading:
    //         'اكتشف لماذا يعتبر رويال نانو سيراميك اسمًا موثوقًا في صناعة السيارات لحلول حماية الطلاء عالية الجودة.',
    //       date: '5 سبتمبر 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637497f54ceb7489efe5e308_olivia-blog-cover-image-1.jpg',
    //       points: [
    //         {
    //           head: 'حماية لا مثيل لها ضد الأضرار البيئية',
    //           body: 'تقدم طبقات رويال نانو سيراميك حماية لا مثيل لها ضد العناصر البيئية الضارة مثل الأمطار الحمضية، وبراز الطيور، وأشعة الشمس القاسية. تمنع طلاءاتنا أكسدة الطلاء وتغير لونه، مما يحافظ على مظهر سيارتك جديدة.',
    //         },
    //         {
    //           head: 'مقاومة للخدوش والمتانة',
    //           body: 'تم تصميم طلاءاتنا السيراميكية لمقاومة الخدوش الطفيفة وعلامات الدوران التي تحدث أثناء غسل السيارات المنتظم. تضمن الطبقة المتينة بقاء طلاء سيارتك في حالة ممتازة ومحمي بشكل جيد.',
    //         },
    //         {
    //           head: 'تطبيق احترافي للحصول على أقصى النتائج',
    //           body: 'يقوم محترفونا المدربون بتطبيق طلاء السيراميك باستخدام تقنيات دقيقة لتحقيق طبقة متساوية وأقصى ارتباط. هذا يضمن أفضل النتائج وحماية طويلة الأمد لطلاء سيارتك.',
    //         },
    //         {
    //           head: 'حل فعال من حيث التكلفة',
    //           body: 'مع رويال نانو سيراميك، تحصل على حماية طلاء فاخرة بسعر فعال من حيث التكلفة. توفر المدخرات على صيانة السيارة وإعادة الطلاء استثمارًا مجديًا لعشاق السيارات والسائقين العاديين على حد سواء.',
    //         },
    //       ],
    //       id: 3,
    //     },
    //     {
    //       label: 'إعلان',
    //       heading:
    //         'لماذا يعد التنظيف المنتظم أمرًا حيويًا للسيارات المدهونة بالسيراميك',
    //       subHeading:
    //         'استكشف أهمية التنظيف المنتظم للحفاظ على جودة وفعالية طلاء رويال نانو سيراميك.',
    //       date: '12 أكتوبر 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749819fb7e46504d281040_olivia-blog-cover-image-5.jpg',
    //       points: [
    //         {
    //           head: 'يحافظ على نظافة الطلاء وفعاليته',
    //           body: 'يضمن التنظيف المنتظم أن يظل طلاء السيراميك نظيفًا وخاليًا من الملوثات. يمكن أن تقلل الغبار والأوساخ من خصائص الطلاء الكارهة للماء، مما يجعل التنظيف المنتظم ضروريًا.',
    //         },
    //         {
    //           head: 'يعزز من عمر الطلاء',
    //           body: 'من خلال الحفاظ على سيارتك المدهونة بالسيراميك بانتظام، تعزز من عمر الطلاء. هذا يعني أن حماية الطلاء تدوم لفترة أطول، وتحافظ على مظهر سيارتك كالجديدة لسنوات.',
    //         },
    //         {
    //           head: 'يستعيد الخصائص الكارهة للماء',
    //           body: 'مع مرور الوقت، قد تتناقص الخصائص الكارهة للماء للطلاء. يساعد التنظيف المنتظم على استعادة هذه الخصائص، مما يضمن استمرار انزلاق الماء وعدم التصاق الملوثات بالسطح.',
    //         },
    //         {
    //           head: 'يمنع الأضرار المحتملة',
    //           body: 'يساعد التنظيف الاحترافي على تحديد المشاكل المحتملة مبكرًا، مثل النقوش الناتجة عن بقع الماء أو تراكم الملوثات. معالجة هذه المشكلات على الفور تمنع الأضرار طويلة الأمد وتحافظ على جودة الطلاء.',
    //         },
    //       ],
    //       id: 4,
    //     },
    //     {
    //       label: 'إعلان',
    //       heading: 'رويال نانو سيراميك: دليل لحماية طلاء السيارة (PPF)',
    //       subHeading:
    //         'تعرف على كيفية حماية فيلم حماية الطلاء (PPF) من رويال نانو سيراميك لأجزاء السيارة المعرضة للخطر.',
    //       date: '1 نوفمبر 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498bd34cf1ad081906caa_slice-blog-cover-image-5.jpg',
    //       points: [
    //         {
    //           head: 'ما هو فيلم حماية الطلاء؟',
    //           body: 'فيلم حماية الطلاء (PPF) هو طبقة شفافة من البولي يوريثان تُطبق على سطح سيارتك. يوفر حماية ممتازة ضد رقائق الصخور، والخدوش، والحطام الطرقي، مع الحفاظ على المظهر الأصلي لسيارتك.',
    //         },
    //         {
    //           head: 'فوائد PPF لسيارتك',
    //           body: 'يعد PPF مثاليًا لحماية المناطق المعرضة للصدمات مثل المصد الأمامي، وغطاء المحرك، والمرايا الجانبية. يمتص الصدمات، ويمنع تلف الطلاء، ويقدم خصائص الشفاء الذاتي التي تزيل الخدوش الطفيفة عند تعرضها للحرارة.',
    //         },
    //         {
    //           head: 'فيلم PPF الممتاز من رويال نانو سيراميك',
    //           body: 'صُمم فيلم PPF الممتاز لدينا لتوفير حماية فائقة ووضوح. مع قدرات الشفاء الذاتي المتقدمة والحماية من الأشعة فوق البنفسجية، يضمن أن يظل طلاء سيارتك محميًا ويحافظ على تألقه.',
    //         },
    //         {
    //           head: 'مثالي للسيارات عالية القيمة والسائقين اليوميين',
    //           body: 'سواء كنت تقود سيارة فاخرة أو مركبة يومية، يوفر PPF حلاً قويًا لحماية الطلاء. إنه مفيد بشكل خاص للحفاظ على قيمة إعادة البيع للسيارات الفاخرة.',
    //         },
    //       ],
    //       id: 5,
    //     },
    //     {
    //       label: 'إعلان',
    //       heading: 'كيفية اختيار طلاء السيراميك المناسب لسيارتك',
    //       subHeading:
    //         'مع وجود العديد من الخيارات المتاحة، قد يكون اختيار طلاء السيراميك المناسب تحديًا. يبسط هذا الدليل العملية.',
    //       date: '5 ديسمبر 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498f6fb7e4659ef282104_slice-blog-cover-image-6.jpg',
    //       points: [
    //         {
    //           head: 'فهم أنواع طلاء السيراميك المختلفة',
    //           body: 'ليست جميع طلاءات السيراميك متساوية. تعرف على الأنواع المختلفة مثل طلاءات 9H، وطلاءات SiO2، وطلاءات محورة بالغرافين، وكيف تؤثر على حماية سيارتك ومظهرها.',
    //         },
    //         {
    //           head: 'اختيار الطلاء المناسب لاحتياجاتك',
    //           body: 'ضع في اعتبارك عوامل مثل المتانة، ومستوى اللمعان، ومتطلبات الصيانة عند اختيار طلاء السيراميك. تقدم رويال نانو سيراميك خيارات متنوعة تناسب احتياجات مختلفة، سواء كنت ترغب في أقصى حماية أو لمسة لامعة.',
    //         },
    //         {
    //           head: 'طلاءات احترافية مقابل DIY',
    //           body: 'بينما تتوفر طلاءات DIY، يضمن التطبيق الاحترافي نتائج أفضل وطول عمر. يضمن فنيو التصديق لدينا تطبيقًا خاليًا من العيوب وحماية طويلة الأمد لطلاء سيارتك.',
    //         },
    //         {
    //           head: 'التكلفة مقابل القيمة: اتخاذ قرار مستنير',
    //           body: 'افهم الفروقات في التكلفة بين طلاءات السيراميك من المستوى الأول وطلاءات السيراميك الممتازة. قد يبدو الاستثمار في طلاء عالي الجودة مكلفًا في البداية، ولكنه يوفر فوائد على المدى الطويل من حيث تكاليف الصيانة المنخفضة والحماية المعززة للطلاء.',
    //         },
    //       ],
    //       id: 6,
    //     },
    //   ]);
    // } else if (userLang === 'en') {
    //   this.BlogsService.blogs.next([
    //     {
    //       label: 'Announcement',
    //       heading: 'Why Ceramic Coating is the Best Choice for Your Car',
    //       subHeading:
    //         'Learn why Royal Nano Ceramic coating is the ultimate solution for car protection and maintaining your vehicle’s shine.',
    //       date: 'July 3, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498e834cf1afb7a9073b8_slice-blog-cover-image-4.jpg',
    //       points: [
    //         {
    //           head: 'What is Ceramic Coating?',
    //           body: 'Ceramic coating is a liquid polymer that is applied to the exterior surfaces of your car. It forms a protective layer that bonds with the paint, providing superior protection against scratches, chemical stains, and UV damage, while also enhancing the gloss and shine of your vehicle.',
    //         },
    //         {
    //           head: 'Benefits of Choosing Royal Nano Ceramic',
    //           body: 'Royal Nano Ceramic offers a premium quality ceramic coating that lasts longer and provides better protection compared to conventional wax or sealants. Our formula creates a hydrophobic layer that repels water and prevents dirt and grime buildup, making your car easier to clean and maintain.',
    //         },
    //         {
    //           head: 'Long-lasting Protection',
    //           body: 'Unlike traditional wax that wears off after a few months, Royal Nano Ceramic coatings can last for years. With proper maintenance, the coating remains intact, protecting your car’s paintwork and maintaining its showroom-like appearance.',
    //         },
    //         {
    //           head: 'Enhanced Value and Aesthetics',
    //           body: 'Investing in a ceramic coating not only improves the aesthetics of your car but also preserves its value. The enhanced shine, color depth, and long-lasting protection provided by our coatings ensure that your vehicle looks stunning and remains protected for years to come.',
    //         },
    //       ],
    //       id: 1,
    //     },
    //     {
    //       label: 'Announcement',
    //       heading:
    //         'How to Maintain Your Car After a Ceramic Coating Application',
    //       subHeading:
    //         'Get tips on how to take care of your car after applying Royal Nano Ceramic coatings to maximize its durability and appearance.',
    //       date: 'August 10, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749804f4b1dafd3ae7ba6a_olivia-blog-cover-image-2.jpg',
    //       points: [
    //         {
    //           head: 'Use pH-Neutral Car Wash Products',
    //           body: 'To maintain your ceramic-coated car, it’s important to use pH-neutral car wash products. Harsh chemicals can degrade the coating over time. A gentle shampoo will ensure the coating stays intact and maintains its hydrophobic properties.',
    //         },
    //         {
    //           head: 'Avoid Automatic Car Washes',
    //           body: 'Automatic car washes can cause micro-scratches and degrade the ceramic coating’s effectiveness. It’s best to wash your car by hand using a microfiber mitt to ensure a thorough and safe clean.',
    //         },
    //         {
    //           head: 'Regularly Check for Contaminants',
    //           body: 'Even with a ceramic coating, contaminants like tar or tree sap can bond to the surface. Regularly inspect your car and use a clay bar to remove these contaminants without damaging the coating.',
    //         },
    //         {
    //           head: 'Apply Ceramic Boosters',
    //           body: 'To maintain the shine and durability of the coating, apply a ceramic booster every few months. These boosters replenish the hydrophobic layer and enhance the overall performance of the coating.',
    //         },
    //       ],
    //       id: 2,
    //     },
    //     {
    //       label: 'Announcement',
    //       heading:
    //         'Royal Nano Ceramic: The Best Solution for Car Paint Protection',
    //       subHeading:
    //         'Discover why Royal Nano Ceramic is a trusted name in the automotive industry for premium paint protection solutions.',
    //       date: 'September 5, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637497f54ceb7489efe5e308_olivia-blog-cover-image-1.jpg',
    //       points: [
    //         {
    //           head: 'Unmatched Protection Against Environmental Damage',
    //           body: 'Royal Nano Ceramic coatings offer unmatched protection against harmful environmental elements such as acid rain, bird droppings, and harsh sunlight. Our coatings prevent paint oxidation and discoloration, keeping your car looking new.',
    //         },
    //         {
    //           head: 'Scratch Resistance and Durability',
    //           body: 'Our ceramic coatings are engineered to resist minor scratches and swirl marks that occur during regular car washing. The durable layer ensures your car’s paint remains pristine and well-protected.',
    //         },
    //         {
    //           head: 'Professional Application for Maximum Results',
    //           body: 'Our trained professionals apply the ceramic coating using precise techniques to achieve an even layer and maximum bond. This guarantees the best results and long-lasting protection for your car’s paintwork.',
    //         },
    //         {
    //           head: 'Affordable and Cost-Effective Solution',
    //           body: 'With Royal Nano Ceramic, you get premium paint protection at a cost-effective price. The long-term savings on car maintenance and repainting make it a worthwhile investment for car enthusiasts and everyday drivers alike.',
    //         },
    //       ],
    //       id: 3,
    //     },
    //     {
    //       label: 'Announcement',
    //       heading: 'Why Regular Detailing is Crucial for Ceramic-Coated Cars',
    //       subHeading:
    //         'Explore the importance of regular detailing to preserve the quality and effectiveness of your Royal Nano Ceramic coating.',
    //       date: 'October 12, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/63749819fb7e46504d281040_olivia-blog-cover-image-5.jpg',
    //       points: [
    //         {
    //           head: 'Keeps Your Coating Clean and Effective',
    //           body: 'Regular detailing ensures that the ceramic coating remains clean and free from contaminants. Dust, dirt, and grime can diminish the hydrophobic properties, making it essential to clean the car regularly.',
    //         },
    //         {
    //           head: 'Enhances the Coating’s Longevity',
    //           body: 'By regularly maintaining your ceramic-coated vehicle, you enhance the longevity of the coating. This means the paint protection lasts longer, and your car retains its new-car appearance for years.',
    //         },
    //         {
    //           head: 'Restores Hydrophobic Properties',
    //           body: 'Over time, the hydrophobic properties of the coating may diminish. Detailing helps restore these properties, ensuring that water continues to bead off and contaminants don’t stick to the surface.',
    //         },
    //         {
    //           head: 'Prevents Potential Damage',
    //           body: 'Professional detailing helps identify potential issues early on, such as etching caused by water spots or contamination buildup. Addressing these issues promptly prevents long-term damage and keeps your coating in top condition.',
    //         },
    //       ],
    //       id: 4,
    //     },
    //     {
    //       label: 'Announcement',
    //       heading: 'Royal Nano Ceramic: A Guide to Paint Protection Film (PPF)',
    //       subHeading:
    //         'Learn how Paint Protection Film (PPF) from Royal Nano Ceramic can safeguard your vehicle’s vulnerable areas.',
    //       date: 'November 1, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498bd34cf1ad081906caa_slice-blog-cover-image-5.jpg',
    //       points: [
    //         {
    //           head: 'What is Paint Protection Film?',
    //           body: 'Paint Protection Film (PPF) is a transparent layer of polyurethane applied to your car’s surface. It provides excellent protection against rock chips, scratches, and road debris, while maintaining your car’s original look.',
    //         },
    //         {
    //           head: 'Benefits of PPF for Your Car',
    //           body: 'PPF is ideal for protecting high-impact areas such as the front bumper, hood, and side mirrors. It absorbs impact, prevents paint damage, and offers self-healing properties that remove minor scratches with heat exposure.',
    //         },
    //         {
    //           head: 'Royal Nano Ceramic’s Premium PPF',
    //           body: 'Our premium PPF is designed to offer superior protection and clarity. With advanced self-healing capabilities and UV protection, it ensures your car’s paint remains protected and maintains its brilliance.',
    //         },
    //         {
    //           head: 'Ideal for High-Value Cars and Daily Drivers',
    //           body: 'Whether you drive a luxury car or a daily commuter, PPF provides a robust solution for paint protection. It is especially useful for preserving the resale value of high-end vehicles.',
    //         },
    //       ],
    //       id: 5,
    //     },
    //     {
    //       label: 'Announcement',
    //       heading: 'How to Choose the Right Ceramic Coating for Your Car',
    //       subHeading:
    //         'With so many options available, choosing the right ceramic coating can be challenging. This guide simplifies the process.',
    //       date: 'December 5, 2024',
    //       img: 'https://cdn.prod.website-files.com/63527d972600c736ba2078a0/637498f6fb7e4659ef282104_slice-blog-cover-image-6.jpg',
    //       points: [
    //         {
    //           head: 'Understanding Different Types of Ceramic Coatings',
    //           body: 'Not all ceramic coatings are created equal. Learn about different types such as 9H coatings, SiO2-based coatings, and graphene-infused coatings, and how they impact your car’s protection and appearance.',
    //         },
    //         {
    //           head: 'Choosing the Right Coating for Your Needs',
    //           body: 'Consider factors such as durability, gloss level, and maintenance requirements when selecting a ceramic coating. Royal Nano Ceramic offers various options to suit different needs, whether you want maximum protection or a glossy finish.',
    //         },
    //         {
    //           head: 'Professional vs. DIY Coatings',
    //           body: 'While DIY coatings are available, professional application ensures better results and longevity. Our certified technicians ensure a flawless application and long-lasting protection for your car’s paint.',
    //         },
    //         {
    //           head: 'Cost vs. Value: Making an Informed Decision',
    //           body: 'Understand the cost differences between entry-level and premium ceramic coatings. Investing in a high-quality coating may seem expensive initially, but it pays off with lower maintenance costs and enhanced paint protection.',
    //         },
    //       ],
    //       id: 6,
    //     },
    //   ]);
    // }
  }

  closeMinu() {
    if (this.nav) this.nav = false;
  }
}
