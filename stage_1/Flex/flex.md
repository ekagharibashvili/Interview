#### Terminology
![flex layout](../assets/axis.jpg)

##### flex layout დამოკიდებულია flex-flow-ს მიმართულებაზე.
##### აითემები ლაგდება main axis-ზე(main start-იდან main-end-მდე) ან cross-axis-ზე(cross-start-დან cross-end-მდე).

##### main-axis - არის კონტეინერის მთავარი აქსისი რომლის გასწვრივაც ლაგდება აითემები. ჰორიზონრალური იქნება თუ ვერტიკალური ეს დამოკიდებულია flex-direction ფროფერთიზე.
##### main-start|main-end - ფლექს აითემები კონტეინერში დალაგებულია main-startიდან main-end-მდე.
##### main-size - შეიძლება იყოს width ან height flex აითემის.
##### cross-axis - ქროს აქსისი პერპენდიკულარულია main-axis-ის ის დამოკიდებულია main-axis-ის მიმართულებაზე.
##### cross-start|cross-end - ქროს ხაზე მოთავზებულია კონტეინერში cross-startიდან cross-end-მდე.
##### cross-size -შეიძლება იყოს width ან height აითემის დამოკიდებულია cross აქსისის განზომილებაზე.

### Flexbox properties
### Properties For parent flex container

#### display: flex; - განსაზღვრავს ფლექს კონტეინერს.
#### flex-direction - ადგენს main-axis-ს და განსაზღვრავს მიმართულებას აიტემების. შეიძლება იყოს ვერტიკალური ან ჰორიზონტალური.
##### flex-direction: row | row-reverse | column | column-reverse;
##### row(default) - მარცხნიდან მარჯვნივ.
##### row-reverse - მარჯვნიდან მარცხნივ.
##### column - ზემოდან ქვემოთ.
##### column-reverse - ქვემოდან ზემოთ.

#### flex-wrap - დეფოლტად ფლექს ელემენტები ცდილობენ განლაგდნენ 1 ხაზზე, მაგრამ ჩვენ შეგვიძლია შევუცვალოთ პირობები
##### flex-wrap: nowrap | wrap | wrap-reverse;
##### nowrap(default) - ყველა აიტემი განლაგდება ერთ ხაზზე. 
##### wrap - განლაგდება რამდენიმე ხაზეე ზემოდან ქვემოთ. wrap-reverse - ქვემოდან ზემოთ.

#### flex-flow
##### flex-flow: column wrap; ეს არის shorthand ვერსია Flex-direction-ის და flex-wrap-ის. რომელიც ერთად განსაზღვრავს მთავარ და ქროს აქსისს default არის row nowrap.

#### justify-content
![justify-content](../assets/justify.jpg)
##### ეს განსაზღვრავს განლაგებას ძირითადი ღერძის გასწვრივ.
##### justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
##### flex-start(default) - აიტემები შეფუთულია flex-მიმართულების დაწყებისთანავე.
##### flex-end - შეფუთულია ფლექს მიმართულების ბოლოში.
##### center - აიტემები არის განლაგებული ფლექს კონტეინერის ცენტრში.
##### space-between - აიტემები თანაბრად გადანაწილებულია ხაზში. პირველი აიტემი არის ხაზის დასაწყისში, ხოლო ბოლო აიტემი ხაზის ბოლოს.
##### space-around - აიტემები თანაბრადაა გადანაწილებული ხაზში და თითოეულ აიტემს აქვს ტოლი სივრცე გარშემო.
##### space-evenly - აითემები ისე ნაწილდება ზოლში, რომ თითოეულ ორ აითემს შორის და კიდეებზე თანაბარი სივრცეა.

#### align-items
![align-items](../assets/align-items.jpg)
##### - ეს განსაზღვრავს როგორაა განლაგებული აიტემები ქროს აქსისის გასწვრივ. მსგავსია ჯასთიფაი კონტენტის.
##### align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
##### stretch(default) - იჭიმება მთლიანი კკონტეინერის შესავსებად.
##### flex-start / start / self-start - განლაგებულია ქროს აქსისის დასაწყისში.
##### flex-end / end / self-end - აიტემები განლაგებულია ქროს აქსისის ბოლოში.
##### center - აიტემები განლაგებულია ცენტრში.
##### baseline - გასწორებულია მათი საწყისი ხაზების მიხედვით.

#### align-content
![align-content](../assets/align-content.jpg)
##### ეს ალაგებს ფლექს კონტეინერის ხაზებს როცა არის ზედმეტი თავისუფალი ადგილი ქროს აქსისზე, როგორც justify-content ალაგებს ინდივიდუალურ აოტემებს main-axis-ზე.
##### align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
##### normal - აიტემები განთავსებულია ნაგულისხმევი პოზიციის მიხედვით.
##### flex-start / start - აიტემები შეფუთულია კონტეინერის დასაწყისში. 
##### flex-end / end - აიტემები მოთავსებულია კონტეინერის ბოლოში.
##### center - ცენტრშია.
##### space-around - ხაზების გარშემო არის თანაბარი თავისუფალი ადგილი.
##### space-evenly - ხაზებს შორის სფეისები არის თანაბარი.
##### space-between - ხაზები თანაბრადაა განლაგებული. პირველი ხაზი არის კონტეინერის თავში მეორე - ბოლოში.
##### stretch - ხაზები იჭიმება დარჩენილი ადგილის დასაკავებლად.

#### gap, row-gap, column-gap
![gap](../assets/gap.jpg)
##### gap - თვისება პირდაპირ აკონტროლებს დაშორებას ფლექსის აიტემებს შორის. ის მხოლოდ აკონტროლებს ადგილს ატემებს შორის და არა კიდეებს შორის.
![code gap](../assets/css-gap.jpg) 
##### gap - gap არ იმუშავებს მაშინ როცა ადგილი აიტემებს შორის უფრო დიდია ვიდრე მითითებული gap. flex-ის რომელიმე ფროფერთის გამო როგორცაა justify-content: space-between.

### Properties for the children (flex-items)

#### Order
![order](../assets/order.jpg)
##### - დეფოლტად, ფლექს აითემები განლაგებულია წყაროს თანმიმდევრობით. order თვისება აკონტროლებს თამიმდევრობას აიტემების ფლექსის კონტეინერში.
##### - order: 5; /* default is 0 */ წყაროს მიხედვით აიტემებს აქვთ მსგავსი order.

#### flex-grow
![flex-grow](../assets/flex-grow.jpg)

##### განსაზღვრავს გაზრდის შესაძლებლობას ფლექს აიტემისთვის, თუ აუცილებელია. ის იღებს ერთეულ მნიშვნელობას, რომელიც ემსახურება პროპორციას.
##### ის კარნახობს რა მოცულობის ადგილი უნდა დაიკავოს ფლექს აიტემმა კონტეინერში.
##### თუ ყველა აიტემს Flex-grow არის 1 მაშინ მათი მოცულობა ტოლი იქნება, ხოლო თუ ერთერთის არის 2, ის იქნება დანარჩენებზე ორჯერ მეტი მოცულობის.
##### flex-grow: 4; /* default 0 */ აქ ვერ გამოვიყენებთ უარყოფით რიცხვებს.

#### flex-shrink
##### ეს განსაზღვრავს შემცირების შესაძლებლობას დლექს აიტემისთვის, თუ აუცილებელია. უარყოფით რიცხვებზე არ მუშაობს.
##### flex-shrink: 3; /* default 1 */

#### flex-basis
##### განსაზღვრავს ნაგულისხმევ ზომას აიტემის, მანამ სანამ დარჩენილი ადგილი ნაწილდება. მისი სიგრძე შეიძლება იყოს: 20%, 5rem ან ქივორდი.
##### auto ქივორდით ფლექს აითემი იღებს იმ თვისებას რაც განსაზღვრულია main-size-ის მიერ. content ქივორდიტ ზომა დამოკიდებულია აიტემის კონტენტზე.
##### ამ ქივორდს ჯერჯერობით არ ასაფფორთებენ. ამიტომ ის არის რთულად დასატესტი და რთულია ვიცოდეთ რას აკეთებენ მსგავსი ფროფერთიები.
##### როგორებიცაა: max-content, min-content, and fit-content.
##### flex-basis:  | auto; /* default auto */
##### თუ 0 იქნება. კონტენტის გარშემო დამატებითი სივრცე არ იარსებებს. ხოლო თუ იქნება auto დამატებითი სივრცე დამოოკიდებული იქნება flex-grow-ზე.


#### flex
##### ეს არის shorthand flex-grow, flex-shrink და flex-basis-ის კომბინაციისთვის. მეორე და მესამე პარამეტრები არის ნებაყოფლობითი. 
##### დეფოლტად არის 0 1 auto. ტუ მას მივანიჭებს 1 რიცხვით მნიშვნელობას ის გახდება 1 0. 
##### რეკომენდირებულია გამოვიყენოთ შორთჰენდ თვისება, ნაცვლად ინდივიდუალური ფლექს აიტემებისა. რადგან შორჰენდი სხვა ველიუებს აყენებს ჭკვიანურად.


#### align-self 
![align-self](../assets/align-self.jpg)
##### ეს საშულებას იძლევეა გაასწოროს ინდივიდუალური ფლექს აითემი.(ქროს აქსისზე)
##### მისი თვისებები ჰგავს align-items ამიტომ შემიძლია აღარ გავიმეორო.
##### align-self: auto | flex-start | flex-end | center | baseline | stretch;
##### float, clear და vertical-align არ ახდენს გავლენას ფლექს აითემზე.

##### justify-self იგნორირებულია ფლექსბოქსებში.