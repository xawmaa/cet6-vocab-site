const STORAGE_KEY = "cet6_vocab_trainer_v1";

const baseWords = [
  { en: "promote", cn: "促进，推动", part: "动词", category: "写作高频,发展类", example: "The government should promote sustainable development." },
  { en: "enhance", cn: "提高，增强", part: "动词", category: "写作高频,能力提升", example: "Reading can enhance students' language competence." },
  { en: "improve", cn: "改善，提高", part: "动词", category: "写作高频,基础表达", example: "Effective measures should be taken to improve air quality." },
  { en: "increase", cn: "增加，提高", part: "动词", category: "翻译高频,数据类", example: "The number of online learners has increased rapidly." },
  { en: "reduce", cn: "减少，降低", part: "动词", category: "翻译高频,环境类", example: "We need to reduce waste in daily life." },
  { en: "address", cn: "解决，处理", part: "动词", category: "写作高频,问题解决", example: "The issue should be addressed as soon as possible." },
  { en: "tackle", cn: "处理，解决", part: "动词", category: "写作高频,问题解决", example: "Society must tackle the problem of unemployment." },
  { en: "facilitate", cn: "促进，使便利", part: "动词", category: "写作高频,科技类", example: "Technology can facilitate communication." },
  { en: "strengthen", cn: "加强，巩固", part: "动词", category: "写作高频,社会类", example: "More efforts are needed to strengthen public awareness." },
  { en: "maintain", cn: "维持，保持", part: "动词", category: "写作高频,基础表达", example: "It is important to maintain a healthy lifestyle." },
  { en: "protect", cn: "保护", part: "动词", category: "翻译高频,环境类", example: "Everyone has a duty to protect the environment." },
  { en: "preserve", cn: "保护，保存", part: "动词", category: "翻译高频,文化类", example: "Traditional culture should be preserved." },
  { en: "encourage", cn: "鼓励", part: "动词", category: "写作高频,教育类", example: "Parents should encourage children to think independently." },
  { en: "discourage", cn: "阻止，使打消念头", part: "动词", category: "写作高频,态度类", example: "Strict rules may discourage dishonest behavior." },
  { en: "achieve", cn: "实现，达到", part: "动词", category: "写作高频,目标类", example: "Hard work helps people achieve their goals." },
  { en: "contribute", cn: "贡献，有助于", part: "动词", category: "写作高频,原因结果", example: "Education contributes to social progress." },
  { en: "reflect", cn: "反映，体现", part: "动词", category: "写作高频,表达观点", example: "This phenomenon reflects a change in people's values." },
  { en: "represent", cn: "代表，象征", part: "动词", category: "翻译高频,文化类", example: "The dragon often represents Chinese culture." },
  { en: "emphasize", cn: "强调，重视", part: "动词", category: "写作高频,观点表达", example: "Schools should emphasize practical ability." },
  { en: "attach importance to", cn: "重视", part: "短语", category: "写作高频,观点表达", example: "We should attach importance to environmental protection." },
  { en: "cultivate", cn: "培养", part: "动词", category: "写作高频,教育类", example: "Schools should cultivate students' creativity." },
  { en: "stimulate", cn: "激发，刺激", part: "动词", category: "写作高频,教育类", example: "Good teaching can stimulate students' interest." },
  { en: "boost", cn: "促进，提高", part: "动词", category: "写作高频,经济类", example: "Tourism can boost the local economy." },
  { en: "eliminate", cn: "消除，淘汰", part: "动词", category: "翻译高频,问题解决", example: "We should try to eliminate poverty." },
  { en: "regulate", cn: "规范，调节", part: "动词", category: "翻译高频,社会类", example: "The government should regulate the online market." },
  { en: "development", cn: "发展", part: "名词", category: "写作高频,发展类", example: "Sustainable development is a global goal." },
  { en: "phenomenon", cn: "现象", part: "名词", category: "写作高频,社会类", example: "This phenomenon has attracted public attention." },
  { en: "awareness", cn: "意识", part: "名词", category: "写作高频,环境类", example: "Public awareness of health has increased." },
  { en: "responsibility", cn: "责任", part: "名词", category: "写作高频,社会类", example: "Everyone should shoulder social responsibility." },
  { en: "opportunity", cn: "机会", part: "名词", category: "写作高频,个人成长", example: "The internet provides many learning opportunities." },
  { en: "challenge", cn: "挑战", part: "名词", category: "写作高频,个人成长", example: "Every challenge can become an opportunity." },
  { en: "environment", cn: "环境", part: "名词", category: "翻译高频,环境类", example: "A clean environment benefits everyone." },
  { en: "education", cn: "教育", part: "名词", category: "写作高频,教育类", example: "Education plays a key role in social development." },
  { en: "technology", cn: "技术，科技", part: "名词", category: "写作高频,科技类", example: "Technology has changed the way we live." },
  { en: "innovation", cn: "创新", part: "名词", category: "写作高频,科技类", example: "Innovation is the driving force of progress." },
  { en: "efficiency", cn: "效率", part: "名词", category: "写作高频,工作学习", example: "Digital tools can improve work efficiency." },
  { en: "quality", cn: "质量，品质", part: "名词", category: "写作高频,基础表达", example: "Quality matters more than quantity." },
  { en: "pressure", cn: "压力", part: "名词", category: "写作高频,社会类", example: "Young people are facing increasing pressure." },
  { en: "competition", cn: "竞争", part: "名词", category: "写作高频,社会类", example: "Competition can motivate people to improve." },
  { en: "cooperation", cn: "合作", part: "名词", category: "写作高频,社会类", example: "Cooperation is essential in modern society." },
  { en: "influence", cn: "影响", part: "名词", category: "写作高频,原因结果", example: "Media has a strong influence on teenagers." },
  { en: "impact", cn: "影响，冲击", part: "名词", category: "写作高频,原因结果", example: "Climate change has a serious impact on agriculture." },
  { en: "advantage", cn: "优势，优点", part: "名词", category: "写作高频,对比类", example: "Online learning has many advantages." },
  { en: "disadvantage", cn: "劣势，缺点", part: "名词", category: "写作高频,对比类", example: "Every method has its disadvantages." },
  { en: "solution", cn: "解决办法", part: "名词", category: "写作高频,问题解决", example: "A practical solution is urgently needed." },
  { en: "measure", cn: "措施", part: "名词", category: "写作高频,问题解决", example: "Effective measures should be adopted." },
  { en: "resource", cn: "资源", part: "名词", category: "翻译高频,环境类", example: "Natural resources are limited." },
  { en: "habit", cn: "习惯", part: "名词", category: "写作高频,个人成长", example: "Good habits lead to long-term success." },
  { en: "ability", cn: "能力", part: "名词", category: "写作高频,个人成长", example: "Communication ability is increasingly important." },
  { en: "creativity", cn: "创造力", part: "名词", category: "写作高频,教育类", example: "Creativity should be encouraged in schools." },
  { en: "confidence", cn: "信心，自信", part: "名词", category: "写作高频,个人成长", example: "Practice can build confidence." },
  { en: "participate", cn: "参加，参与", part: "动词", category: "写作高频,校园生活", example: "Students should participate in social practice." },
  { en: "adapt", cn: "适应，改编", part: "动词", category: "写作高频,个人成长", example: "Young people need to adapt to rapid social changes." },
  { en: "benefit", cn: "使受益，有益于", part: "动词", category: "写作高频,原因结果", example: "Regular exercise benefits both body and mind." },
  { en: "consume", cn: "消费，消耗", part: "动词", category: "翻译高频,经济类", example: "People consume more energy in modern cities." },
  { en: "invest", cn: "投资，投入", part: "动词", category: "翻译高频,经济类", example: "The city invested heavily in public transport." },
  { en: "transform", cn: "改变，转变", part: "动词", category: "写作高频,发展类", example: "The internet has transformed education." },
  { en: "evaluate", cn: "评估，评价", part: "动词", category: "写作高频,观点表达", example: "We should evaluate the advantages and disadvantages carefully." },
  { en: "clarify", cn: "澄清，阐明", part: "动词", category: "写作高频,观点表达", example: "The teacher clarified the difficult grammar point." },
  { en: "illustrate", cn: "说明，阐明", part: "动词", category: "写作高频,观点表达", example: "This example illustrates the importance of persistence." },
  { en: "obtain", cn: "获得，取得", part: "动词", category: "翻译高频,基础表达", example: "Students can obtain useful information online." },
  { en: "replace", cn: "取代，替换", part: "动词", category: "写作高频,科技类", example: "Machines cannot completely replace human creativity." },
  { en: "expand", cn: "扩大，扩展", part: "动词", category: "写作高频,发展类", example: "Reading can expand our knowledge." },
  { en: "establish", cn: "建立，创立", part: "动词", category: "翻译高频,社会类", example: "A better system should be established." },
  { en: "ensure", cn: "确保，保证", part: "动词", category: "写作高频,问题解决", example: "Rules are needed to ensure fairness." },
  { en: "require", cn: "需要，要求", part: "动词", category: "写作高频,基础表达", example: "Success requires patience and effort." },
  { en: "deserve", cn: "值得，应得", part: "动词", category: "写作高频,观点表达", example: "This issue deserves more attention." },
  { en: "balance", cn: "平衡", part: "动词", category: "写作高频,个人成长", example: "Students should balance study and rest." },
  { en: "ignore", cn: "忽视", part: "动词", category: "写作高频,问题类", example: "We cannot ignore the importance of mental health." },
  { en: "raise", cn: "提高，筹集，提出", part: "动词", category: "写作高频,基础表达", example: "The campaign aims to raise public awareness." },
  { en: "satisfy", cn: "满足，使满意", part: "动词", category: "翻译高频,消费类", example: "Products should satisfy consumers' needs." },
  { en: "trend", cn: "趋势，潮流", part: "名词", category: "写作高频,社会类", example: "Online learning has become a popular trend." },
  { en: "factor", cn: "因素", part: "名词", category: "写作高频,原因结果", example: "Family background is not the only factor." },
  { en: "approach", cn: "方法，途径", part: "名词", category: "写作高频,问题解决", example: "A new approach is needed to solve this problem." },
  { en: "method", cn: "方法", part: "名词", category: "写作高频,问题解决", example: "This method is simple and effective." },
  { en: "strategy", cn: "策略", part: "名词", category: "写作高频,问题解决", example: "A clear strategy can improve learning efficiency." },
  { en: "principle", cn: "原则", part: "名词", category: "写作高频,观点表达", example: "Honesty is an important principle." },
  { en: "value", cn: "价值，价值观", part: "名词", category: "写作高频,文化类", example: "Traditional values still influence modern life." },
  { en: "culture", cn: "文化", part: "名词", category: "翻译高频,文化类", example: "Chinese culture has a long history." },
  { en: "tradition", cn: "传统", part: "名词", category: "翻译高频,文化类", example: "Many traditions are worth preserving." },
  { en: "heritage", cn: "遗产，传统", part: "名词", category: "翻译高频,文化类", example: "Cultural heritage should be protected." },
  { en: "population", cn: "人口", part: "名词", category: "翻译高频,社会类", example: "The aging population brings new challenges." },
  { en: "community", cn: "社区，群体", part: "名词", category: "写作高频,社会类", example: "Community service helps students learn responsibility." },
  { en: "society", cn: "社会", part: "名词", category: "写作高频,社会类", example: "Technology has a deep impact on society." },
  { en: "economy", cn: "经济", part: "名词", category: "翻译高频,经济类", example: "Tourism can support the local economy." },
  { en: "industry", cn: "工业，行业", part: "名词", category: "翻译高频,经济类", example: "The service industry is developing quickly." },
  { en: "employment", cn: "就业", part: "名词", category: "写作高频,社会类", example: "Employment pressure worries many graduates." },
  { en: "consumer", cn: "消费者", part: "名词", category: "翻译高频,消费类", example: "Consumers pay more attention to product quality." },
  { en: "convenience", cn: "便利，方便", part: "名词", category: "写作高频,科技类", example: "Mobile payment brings great convenience." },
  { en: "security", cn: "安全，保障", part: "名词", category: "写作高频,科技类", example: "Information security should not be ignored." },
  { en: "privacy", cn: "隐私", part: "名词", category: "写作高频,科技类", example: "Online privacy deserves more protection." },
  { en: "communication", cn: "交流，沟通", part: "名词", category: "写作高频,社会类", example: "Communication is important in teamwork." },
  { en: "relationship", cn: "关系", part: "名词", category: "写作高频,社会类", example: "Good relationships can reduce pressure." },
  { en: "experience", cn: "经验，经历", part: "名词", category: "写作高频,个人成长", example: "Volunteer work provides valuable experience." },
  { en: "knowledge", cn: "知识", part: "名词", category: "写作高频,教育类", example: "Knowledge should be used in practice." },
  { en: "skill", cn: "技能", part: "名词", category: "写作高频,教育类", example: "Communication skills are important in the workplace." },
  { en: "attitude", cn: "态度", part: "名词", category: "写作高频,个人成长", example: "A positive attitude helps us overcome difficulties." },
  { en: "motivation", cn: "动力，动机", part: "名词", category: "写作高频,个人成长", example: "Interest is a strong motivation for learning." },
  { en: "discipline", cn: "自律，纪律", part: "名词", category: "写作高频,个人成长", example: "Self-discipline is necessary for success." },
  { en: "persistence", cn: "坚持，毅力", part: "名词", category: "写作高频,个人成长", example: "Persistence is the key to long-term progress." },
  { en: "sustainability", cn: "可持续性", part: "名词", category: "翻译高频,环境类", example: "Sustainability is central to environmental protection." },
  { en: "pollution", cn: "污染", part: "名词", category: "翻译高频,环境类", example: "Air pollution has become a serious problem." },
  { en: "emission", cn: "排放", part: "名词", category: "翻译高频,环境类", example: "Carbon emissions should be reduced." },
  { en: "shortage", cn: "短缺", part: "名词", category: "翻译高频,环境类", example: "Water shortage affects many regions." },
  { en: "waste", cn: "浪费，废物", part: "名词", category: "翻译高频,环境类", example: "Food waste should be reduced." },
  { en: "globalization", cn: "全球化", part: "名词", category: "写作高频,社会类", example: "Globalization creates both opportunities and challenges." },
  { en: "urbanization", cn: "城市化", part: "名词", category: "翻译高频,社会类", example: "Urbanization has changed people's lifestyle." },
  { en: "digitalization", cn: "数字化", part: "名词", category: "翻译高频,科技类", example: "Digitalization improves administrative efficiency." },
  { en: "platform", cn: "平台", part: "名词", category: "翻译高频,科技类", example: "Online platforms provide learning resources." },
  { en: "application", cn: "应用，申请", part: "名词", category: "翻译高频,科技类", example: "This application is widely used in education." },
  { en: "device", cn: "设备，装置", part: "名词", category: "翻译高频,科技类", example: "Smart devices make life more convenient." },
  
  // ==================== 扩充六级高频词汇 ====================
  // 科技创新与数字社会
  { en: "artificial intelligence", cn: "人工智能", part: "名词", category: "科技创新,智能时代", example: "Artificial intelligence has revolutionized various industries." },
  { en: "virtual reality", cn: "虚拟现实", part: "名词", category: "科技创新,前沿技术", example: "Virtual reality technology provides users with immersive experiences." },
  { en: "breakthrough", cn: "突破，重大进展", part: "名词", category: "科技创新,前沿技术", example: "Scientists have made a significant breakthrough in cancer research." },
  { en: "penetrate", cn: "渗透，穿透", part: "动词", category: "科技创新,社会发展", example: "Smartphones have penetrated into every aspect of our lives." },
  { en: "ubiquitous", cn: "无处不在的，普遍存在的", part: "形容词", category: "科技创新,社会发展", example: "Internet connection has become ubiquitous in modern cities." },
  { en: "accelerate", cn: "加速，加快", part: "动词", category: "科技创新,发展类", example: "Digital technology has accelerated the sharing of information." },
  { en: "facilitator", cn: "促进者，便利者", part: "名词", category: "科技创新,发展类", example: "The internet acts as a facilitator for global trade." },
  { en: "cybersecurity", cn: "网络安全", part: "名词", category: "科技创新,安全类", example: "Cybersecurity is a critical concern for financial institutions." },
  { en: "automation", cn: "自动化", part: "名词", category: "科技创新,生产力", example: "Automation has significantly increased manufacturing efficiency." },
  { en: "state-of-the-art", cn: "最先进的，最高水平的", part: "形容词", category: "科技创新,高尖技术", example: "The lab is equipped with state-of-the-art instruments." },

  // 生态环境与可持续发展
  { en: "biodiversity", cn: "生物多样性", part: "名词", category: "生态环境,自然保护", example: "Protecting biodiversity is essential for ecological balance." },
  { en: "renewable energy", cn: "可再生能源", part: "名词", category: "生态环境,清洁资源", example: "Solar and wind power are forms of renewable energy." },
  { en: "low-carbon", cn: "低碳的", part: "形容词", category: "生态环境,环境保护", example: "A low-carbon lifestyle helps combat climate change." },
  { en: "eco-friendly", cn: "环保的，对生态友好的", part: "形容词", category: "生态环境,环境保护", example: "We should choose eco-friendly products to reduce pollution." },
  { en: "carbon neutrality", cn: "碳中和", part: "名词", category: "生态环境,绿色发展", example: "Many countries aim to achieve carbon neutrality by 2050." },
  { en: "deteriorate", cn: "恶化，退化", part: "动词", category: "生态环境,生态破坏", example: "The air quality in the city has deteriorated due to emissions." },
  { en: "conservation", cn: "保护，保存（自然资源）", part: "名词", category: "生态环境,自然保护", example: "Energy conservation is important for sustainable development." },
  { en: "deplete", cn: "消耗，使枯竭", part: "动词", category: "生态环境,自然破坏", example: "Human activities continue to deplete natural resources." },
  { en: "greenhouse effect", cn: "温室效应", part: "名词", category: "生态环境,气候变化", example: "The greenhouse effect leads to global warming." },
  { en: "eco-system", cn: "生态系统", part: "名词", category: "生态环境,自然保护", example: "Pollution can damage the delicate balance of the eco-system." },

  // 经济与全球化
  { en: "prosperity", cn: "繁荣，兴旺", part: "名词", category: "经济发展,社会类", example: "Economic prosperity brings a higher standard of living." },
  { en: "infrastructure", cn: "基础设施", part: "名词", category: "经济发展,建设类", example: "High-speed railways are a key part of modern infrastructure." },
  { en: "domestic demand", cn: "内需", part: "名词", category: "经济发展,市场类", example: "The government took measures to boost domestic demand." },
  { en: "stimulate", cn: "刺激，激发", part: "动词", category: "经济发展,政策类", example: "Tax cuts were introduced to stimulate economic growth." },
  { en: "e-commerce", cn: "电子商务", part: "名词", category: "经济发展,数字交易", example: "E-commerce has transformed traditional retail business." },
  { en: "entrepreneurship", cn: "创业，企业家精神", part: "名词", category: "经济发展,个人成长", example: "Universities should encourage innovation and entrepreneurship." },
  { en: "multinational", cn: "跨国的，多国的", part: "形容词", category: "经济发展,全球化", example: "Multinational corporations play a major role in global trade." },
  { en: "competitive edge", cn: "竞争优势", part: "名词", category: "经济发展,竞争力", example: "Continuous innovation gives the company a competitive edge." },
  { en: "monopoly", cn: "垄断，独占", part: "名词", category: "经济发展,市场秩序", example: "Anti-monopoly laws are designed to protect fair competition." },
  { en: "sustainable", cn: "可持续的", part: "形容词", category: "经济发展,绿色发展", example: "We must strive for sustainable economic growth." },

  // 社会民生与文化交流
  { en: "aging society", cn: "老龄化社会", part: "名词", category: "社会民生,人口结构", example: "An aging society poses challenges to social welfare systems." },
  { en: "medical insurance", cn: "医疗保险", part: "名词", category: "社会民生,社会保障", example: "Universal medical insurance ensures basic healthcare for all." },
  { en: "social security", cn: "社会保障", part: "名词", category: "社会民生,社会保障", example: "Social security systems help protect the vulnerable." },
  { en: "cultural diversity", cn: "文化多样性", part: "名词", category: "文化交流,多元文化", example: "Globalization should promote respect for cultural diversity." },
  { en: "harmonious", cn: "和谐的，融洽的", part: "形容词", category: "社会民生,和谐社会", example: "Building a harmonious society requires efforts from everyone." },
  { en: "pension", cn: "养老金，退休金", part: "名词", category: "社会民生,社会保障", example: "The government has raised the basic pension for retirees." },
  { en: "employment rate", cn: "就业率", part: "名词", category: "社会民生,经济指标", example: "A stable employment rate reflects a healthy economy." },
  { en: "cultural heritage", cn: "文化遗产", part: "名词", category: "文化交流,传统保护", example: "The Great Wall is a famous world cultural heritage." },
  { en: "intact", cn: "完好无损的", part: "形容词", category: "文化交流,传统保护", example: "Many historical buildings have been kept intact." },
  { en: "integration", cn: "融合，一体化", part: "名词", category: "社会民生,文化交流", example: "The integration of technology and art creates new possibilities." },

  // 教育与个人成长
  { en: "all-round development", cn: "全面发展", part: "名词", category: "教育与成长,素质教育", example: "Schools should focus on the all-round development of students." },
  { en: "lifelong learning", cn: "终身学习", part: "名词", category: "教育与成长,个人提升", example: "Lifelong learning is essential in a rapidly changing world." },
  { en: "critical thinking", cn: "批判性思维", part: "名词", category: "教育与成长,思维训练", example: "Critical thinking helps students evaluate arguments objectively." },
  { en: "academic excellence", cn: "学术卓越，优秀成绩", part: "名词", category: "教育与成长,校园生活", example: "The scholarship was awarded for academic excellence." },
  { en: "potential", cn: "潜力，潜能", part: "名词", category: "教育与成长,个人提升", example: "Good teachers help students realize their full potential." },
  { en: "peer pressure", cn: "同辈压力", part: "名词", category: "教育与成长,校园生活", example: "Teenagers are often influenced by peer pressure." },
  { en: "curriculum", cn: "课程，课业", part: "名词", category: "教育与成长,教学相关", example: "Physical education is an important part of the school curriculum." },
  { en: "vocational training", cn: "职业培训", part: "名词", category: "教育与成长,技能提升", example: "Vocational training prepares students for specific careers." },
  { en: "cognitive", cn: "认知的，感知的", part: "形容词", category: "教育与成长,心理机制", example: "Reading books stimulates children's cognitive development." },
  { en: "resilience", cn: "韧性，复原力", part: "名词", category: "教育与成长,个人提升", example: "Overcoming challenges helps young people build resilience." }
];

const baseTranslationPrompts = [
  {
    id: "tr-culture-01",
    year: "近年主题",
    title: "黄鹤楼",
    topic: "传统文化",
    source: "真题风格训练",
    prompt: "黄鹤楼位于湖北省武汉市，是中国著名的历史文化景点之一。许多古代诗人曾在这里留下脍炙人口的诗篇，使这座楼在中国文学史上具有特殊地位。如今，黄鹤楼不仅吸引大量游客，也成为人们了解中国传统文化的重要窗口。",
    reference: "Located in Wuhan, Hubei Province, Yellow Crane Tower is one of China's famous historical and cultural attractions. Many ancient poets wrote popular poems about it, giving the tower a special place in the history of Chinese literature. Today, Yellow Crane Tower not only attracts large numbers of tourists, but also serves as an important window for people to learn about traditional Chinese culture.",
    expressions: ["be located in 位于", "historical and cultural attraction 历史文化景点", "have a special place in 在……中具有特殊地位", "serve as 作为，起到……作用"]
  },
  {
    id: "tr-tech-01",
    year: "近年主题",
    title: "北斗卫星导航系统",
    topic: "科技发展",
    source: "真题风格训练",
    prompt: "北斗卫星导航系统是中国自主建设和运行的全球卫星导航系统。它可以为交通、农业、气象和公共安全等领域提供高精度服务。随着技术不断发展，北斗正在越来越多地应用于人们的日常生活。",
    reference: "The BeiDou Navigation Satellite System is a global satellite navigation system independently built and operated by China. It can provide high-precision services for transportation, agriculture, meteorology, public safety and other fields. With the continuous development of technology, BeiDou is being increasingly applied in people's daily lives.",
    expressions: ["independently built and operated 自主建设和运行", "high-precision services 高精度服务", "with the continuous development of 随着……不断发展", "be applied in 被应用于"]
  },
  {
    id: "tr-economy-01",
    year: "近年主题",
    title: "洋山港",
    topic: "经济建设",
    source: "真题风格训练",
    prompt: "洋山港是上海国际航运中心的重要组成部分，也是世界上繁忙的集装箱港口之一。自动化设备的广泛使用显著提高了港口的运行效率。洋山港的发展展示了中国在基础设施建设和国际贸易方面取得的巨大成就。",
    reference: "Yangshan Port is an important part of the Shanghai International Shipping Center and one of the busiest container ports in the world. The extensive use of automated equipment has significantly improved the operating efficiency of the port. The development of Yangshan Port demonstrates China's great achievements in infrastructure construction and international trade.",
    expressions: ["an important part of ……的重要组成部分", "container port 集装箱港口", "operating efficiency 运行效率", "infrastructure construction 基础设施建设"]
  },
  {
    id: "tr-culture-02",
    year: "近年主题",
    title: "中国茶文化",
    topic: "传统文化",
    source: "真题风格训练",
    prompt: "茶在中国已有几千年的历史。中国人不仅把茶作为一种饮品，也把饮茶视为交流感情和放松身心的方式。近年来，中国茶文化在世界范围内受到越来越多的关注，许多外国人开始学习中国茶艺。",
    reference: "Tea has a history of thousands of years in China. Chinese people regard tea not only as a drink, but also as a way to communicate feelings and relax both body and mind. In recent years, Chinese tea culture has attracted increasing attention around the world, and many foreigners have begun to learn the Chinese art of tea.",
    expressions: ["have a history of 有……历史", "regard ... as ... 把……视为……", "relax body and mind 放松身心", "attract increasing attention 受到越来越多关注"]
  },
  {
    id: "tr-society-01",
    year: "近年主题",
    title: "全民健身",
    topic: "社会生活",
    source: "真题风格训练",
    prompt: "近年来，越来越多的中国人开始重视健康生活方式。许多城市修建了公园、步道和体育场馆，方便居民参加体育锻炼。全民健身不仅有助于提高人们的身体素质，也促进了更加积极的生活态度。",
    reference: "In recent years, more and more Chinese people have begun to attach importance to a healthy lifestyle. Many cities have built parks, walking trails and sports facilities to make it convenient for residents to take physical exercise. National fitness not only helps improve people's physical health, but also promotes a more positive attitude toward life.",
    expressions: ["attach importance to 重视", "make it convenient for sb. to do 方便某人做某事", "take physical exercise 参加体育锻炼", "a positive attitude toward life 积极的生活态度"]
  },
  {
    id: "tr-education-01",
    year: "近年主题",
    title: "数字教育",
    topic: "教育科技",
    source: "真题风格训练",
    prompt: "数字技术正在深刻改变中国的教育。在线课程使学生能够突破时间和地点的限制，获得更加丰富的学习资源。同时，教师也可以利用数字平台改进教学方法，提高教学效率。",
    reference: "Digital technology is profoundly changing education in China. Online courses enable students to go beyond the limits of time and place and gain access to richer learning resources. At the same time, teachers can also use digital platforms to improve teaching methods and enhance teaching efficiency.",
    expressions: ["profoundly change 深刻改变", "go beyond the limits of 突破……限制", "gain access to 获得，接触到", "enhance teaching efficiency 提高教学效率"]
  }
];

const readingArticles = [
  {
    id: "rd-tech-01",
    title: "Artificial Intelligence and Everyday Judgment",
    topic: "科技与生活",
    level: "CET-6",
    words: 214,
    article: [
      "Artificial intelligence is no longer confined to laboratories or science fiction. It recommends what we read, helps banks detect unusual transactions, and enables doctors to examine medical images more efficiently. These applications have made many services faster and more personalized, but they have also raised a practical question: how much judgment should people hand over to machines?",
      "A useful way to understand AI is to see it as a powerful assistant rather than an independent authority. Algorithms can identify patterns in large amounts of data, yet they do not truly understand human values, local context, or moral responsibility. For example, a system may predict that a student is unlikely to succeed based on previous records, but a teacher may notice motivation, family changes, or recent improvement that the data fails to capture.",
      "Therefore, the future of AI should not be a competition between humans and machines. Instead, it should be a process of cooperation. Machines can handle repetitive analysis, while people remain responsible for asking better questions, checking unfair results, and making decisions that affect human lives."
    ],
    translation: [
      "人工智能不再局限于实验室或科幻小说。它会推荐我们阅读的内容，帮助银行发现异常交易，还能让医生更高效地查看医学影像。这些应用使许多服务变得更快、更个性化，但也提出了一个现实问题：人们应该把多少判断交给机器？",
      "理解人工智能的一种有效方式，是把它看作强大的助手，而不是独立的权威。算法能够在大量数据中识别模式，但它并不能真正理解人类价值、具体语境或道德责任。例如，一个系统可能根据过往记录预测某个学生不太可能成功，但教师可能会注意到动机、家庭变化或近期进步，而这些是数据无法捕捉的。",
      "因此，人工智能的未来不应是人与机器之间的竞争。相反，它应该是一个合作过程。机器可以处理重复性的分析，而人类仍然负责提出更好的问题、检查不公平的结果，并对影响人类生活的决策负责。"
    ],
    expressions: ["be confined to 局限于", "hand over 交给，移交", "rather than 而不是", "fail to capture 未能捕捉", "remain responsible for 仍然负责"]
  },
  {
    id: "rd-edu-01",
    title: "The Value of Slow Learning",
    topic: "教育学习",
    level: "CET-6",
    words: 201,
    article: [
      "In an age of short videos and instant answers, learning is often expected to be quick and entertaining. Many students become impatient when progress is not immediately visible. However, some of the most valuable forms of learning are slow. They require repeated reading, careful comparison, and the willingness to remain confused for a while.",
      "Slow learning does not mean inefficient learning. On the contrary, it allows ideas to become connected rather than merely memorized. When students spend time wrestling with a difficult article, a complex theory, or a challenging writing task, they gradually build the ability to think independently. This ability cannot be downloaded, nor can it be replaced by a summary generated in seconds.",
      "Teachers and learners should therefore make room for difficulty. A good education is not designed simply to remove all obstacles. It should help students develop the patience and confidence to deal with problems that do not have immediate answers."
    ],
    translation: [
      "在短视频和即时答案盛行的时代，学习常常被期待变得快速而有趣。许多学生在进步没有立刻显现时会变得不耐烦。然而，一些最有价值的学习形式本来就是缓慢的。它们需要反复阅读、仔细比较，并愿意在一段时间里保持困惑。",
      "慢学习并不意味着低效学习。相反，它能让观念彼此连接，而不仅仅是被记住。当学生花时间钻研一篇难文章、一个复杂理论或一项有挑战的写作任务时，他们会逐渐建立独立思考的能力。这种能力无法被下载，也无法被几秒钟生成的摘要取代。",
      "因此，教师和学习者都应该为困难留出空间。好的教育并不是简单地清除所有障碍。它应该帮助学生培养耐心 and 信心，去处理那些没有即时答案的问题。"
    ],
    expressions: ["instant answers 即时答案", "become impatient 变得不耐烦", "on the contrary 相反", "wrestle with 努力处理", "make room for 为……留出空间"]
  },
  {
    id: "rd-env-01",
    title: "Rethinking Convenience",
    topic: "环境保护",
    level: "CET-6",
    words: 205,
    article: [
      "Modern life is built on convenience. Food can be delivered within minutes, online shopping brings goods to the door, and disposable products save people from washing and repairing. Convenience has improved the quality of life in many ways, but it has also encouraged a culture in which waste is easily ignored.",
      "The environmental cost of convenience is often hidden. A plastic box used for less than an hour may remain in nature for decades. A package that looks small in one household becomes a huge burden when multiplied by millions of consumers. The problem is not that people enjoy convenience, but that they rarely see the full chain of production, transportation, use and disposal.",
      "A more sustainable lifestyle does not require everyone to give up modern services. It begins with small choices: carrying a reusable cup, refusing unnecessary packaging, repairing usable items, and supporting companies that reduce waste. Convenience should serve human well-being, not weaken the environment on which that well-being depends."
    ],
    translation: [
      "现代生活建立在便利之上。食物可以在几分钟内送达，网购把商品送到家门口，一次性产品让人们免于清洗和维修。便利在许多方面提高了生活质量，但它也助长了一种容易忽视浪费的文化。",
      "便利带来的环境成本常常是隐藏的。一个使用不到一小时的塑料盒可能会在自然界中存在几十年。一个家庭中看起来很小的包装，当乘以数百万消费者时，就会变成巨大的负担。问题不在于人们享受便利，而在于他们很少看到生产、运输、使用和处理的完整链条。",
      "更可持续的生活方式并不要求每个人放弃现代服务。它始于小选择：携带可重复使用的杯子，拒绝不必要的包装，修理仍可使用的物品，并支持减少浪费的企业。便利应服务于人类福祉，而不是削弱这种福祉所依赖的环境。"
    ],
    expressions: ["be built on 建立在……之上", "disposable products 一次性产品", "environmental cost 环境成本", "be multiplied by 乘以", "sustainable lifestyle 可持续生活方式"]
  },
  {
    id: "rd-society-01",
    title: "Why Public Spaces Matter",
    topic: "社会生活",
    level: "CET-6",
    words: 198,
    article: [
      "A city is more than a collection of buildings and roads. It is also a network of shared spaces where strangers can meet, rest, exercise and observe one another. Parks, libraries, squares and community centers may appear ordinary, but they quietly shape the social life of a city.",
      "Public spaces are important because they reduce isolation. In private spaces, people usually meet those who are similar to themselves. In public spaces, however, different generations and social groups can appear in the same place without needing a formal invitation. Such contact may be brief, but it reminds people that they belong to a wider community.",
      "Good public spaces also make a city more equal. Not everyone can afford expensive entertainment, but everyone should have access to a safe bench, a clean path or a quiet reading room. When cities invest in public spaces, they invest not only in appearance but also in trust, inclusion and everyday dignity."
    ],
    translation: [
      "一座城市不只是建筑和道路的集合。它也是由共享空间构成的网络，在那里陌生人可以相遇、休息、锻炼并观察彼此。公园、图书馆、广场和社区中心也许看起来很普通，但它们悄然塑造着一座城市的社会生活。",
      "公共空间之所以重要，是因为它们能减少孤立。在私人空间里，人们通常接触与自己相似的人。然而在公共空间中，不同年龄和社会群体可以出现在同一个地方，而不需要正式邀请。这种接触也许短暂，但它提醒人们自己属于更广阔的共同体。",
      "好的公共空间还能让城市更加平等。并不是每个人都负担得起昂贵的娱乐，但每个人都应该拥有安全的长椅、干净的小路或安静的阅览室。当城市投资公共空间时，它们投资的不只是外观，还有信任、包容和日常尊严。"
    ],
    expressions: ["a collection of ……的集合", "reduce isolation 减少孤立", "belong to 属于", "have access to 可以使用", "invest in 投资于"]
  },
  {
    id: "rd-work-01",
    title: "Remote Work and Self-Management",
    topic: "职场发展",
    level: "CET-6",
    words: 206,
    article: [
      "Remote work has changed the meaning of the workplace. For many employees, work is no longer tied to a fixed desk or a daily commute. This flexibility can save time and improve concentration, especially for tasks that require deep thinking. Yet remote work also exposes a skill that was sometimes hidden in traditional offices: self-management.",
      "Without clear boundaries, work can easily spread into every corner of life. Messages arrive after dinner, meetings fill the day, and employees may feel guilty when they are not visibly busy. Successful remote workers therefore need to design routines. They set starting and ending times, protect periods for focused work, and communicate progress clearly with colleagues.",
      "Companies also have responsibilities. They should evaluate results rather than online presence, provide reasonable communication rules, and respect personal time. Remote work is not simply a technical arrangement. It is a test of trust, discipline and the ability to cooperate without constant supervision."
    ],
    translation: [
      "远程办公改变了工作场所的含义。对许多员工来说，工作不再与固定办公桌或每日通勤绑定。这种灵活性可以节省时间并提高专注力，尤其适合需要深度思考的任务。然而，远程办公也暴露出一种在传统办公室中有时被隐藏的能力：自我管理。",
      "如果没有清晰边界，工作很容易蔓延到生活的每个角落。晚饭后仍有消息到来，会议占满一天，员工在没有明显忙碌时可能会感到内疚。因此，成功的远程工作者需要设计规律。他们设定开始 and 结束时间，保护专注工作的时段，并清楚地向同事沟通进展。",
      "公司也负有责任。它们应该评估结果而不是在线状态，提供合理的沟通规则，并尊重个人时间。远程办公不只是技术安排。它是对信任、自律以及在没有持续监督下合作能力的考验。"
    ],
    expressions: ["be tied to 与……绑定", "daily commute 日常通勤", "clear boundaries 清晰边界", "evaluate results 评估结果", "constant supervision 持续监督"]
  },
  {
    id: "rd-culture-01",
    title: "Museums in the Digital Age",
    topic: "文化传播",
    level: "CET-6",
    words: 210,
    article: [
      "Museums used to be viewed mainly as quiet buildings where valuable objects were displayed behind glass. Today, many museums are becoming active platforms for education and public communication. Digital technology has accelerated this change by allowing collections to reach people who may never visit the physical site.",
      "Online exhibitions, virtual tours and short educational videos can make cultural resources more accessible. A student in a small town can examine ancient paintings in high resolution, while an elderly visitor can explore a historical site without traveling a long distance. These experiences cannot fully replace seeing an object in person, but they can awaken curiosity and prepare people for deeper learning.",
      "The challenge for museums is to use technology without turning culture into shallow entertainment. A successful digital museum should not only attract clicks. It should provide context, encourage questions and help visitors understand why an object matters. In this sense, technology is valuable when it brings people closer to history rather than distracting them from it."
    ],
    translation: [
      "博物馆过去主要被看作安静的建筑，珍贵物品被陈列在玻璃后面。如今，许多博物馆正在成为教育和公共传播的活跃平台。数字技术加速了这种变化，使馆藏能够接触到那些可能永远不会到实体场馆参观的人。",
      "线上展览、虚拟游览和短教育视频可以让文化资源更加容易获得。小城镇的学生可以高清查看古代绘画，年长的参观者也可以不用长途旅行就探索历史遗址。这些体验无法完全取代亲眼观看实物，但它们可以激发好奇心，并为更深入的学习做准备。",
      "博物馆面临的挑战，是在使用技术的同时不把文化变成浅层娱乐。成功的数字博物馆不应只是吸引点击。它应该提供背景、鼓励提问，并帮助参观者理解一件物品为何重要。从这个意义上说，当技术让人们更接近历史而不是分散他们对历史的注意力时，它才是有价值的。"
    ],
    expressions: ["be viewed as 被看作", "physical site 实体场馆", "in high resolution 高清地", "awaken curiosity 激发好奇心", "provide context 提供背景"]
  },
  {
    id: "rd-health-01",
    title: "Sleep as a Public Health Issue",
    topic: "健康生活",
    level: "CET-6",
    words: 196,
    article: [
      "Sleep is often treated as a private habit, something each person manages according to personal discipline. However, researchers increasingly describe sleep as a public health issue. When large numbers of people sleep poorly, the effects go beyond individual tiredness and influence learning, traffic safety, workplace productivity and emotional stability.",
      "Several forces have made good sleep harder to achieve. Screens keep the brain alert late at night, urban noise interrupts rest, and competitive work cultures often praise those who sacrifice sleep. Young people may also delay sleep because online entertainment provides endless stimulation. Over time, lack of sleep weakens memory, reduces patience and increases the risk of illness.",
      "Improving sleep therefore requires both personal and social changes. Individuals can build regular routines and reduce screen use before bed. Schools and companies can avoid unnecessary early schedules and respect recovery time. A society that values sleep is not less ambitious; it is more aware of the human conditions that make ambition sustainable."
    ],
    translation: [
      "睡眠常常被视为一种私人习惯，是每个人根据自律来管理的事情。然而，研究人员越来越多地把睡眠描述为公共健康问题。当大量人睡眠质量差时，其影响就不只是个人疲劳，还会影响学习、交通安全、工作效率和情绪稳定。",
      "多种力量使良好睡眠更难实现。屏幕让大脑在深夜仍保持警觉，城市噪音打断休息，竞争性的工作文化常常赞扬那些牺牲睡眠的人。年轻人也可能因为网络娱乐提供无尽刺激而推迟睡觉。长期来看，缺乏睡眠会削弱记忆、降低耐心，并增加患病风险。",
      "因此，改善睡眠既需要个人改变，也需要社会改变。个人可以建立规律作息，并在睡前减少屏幕使用。学校和公司可以避免不必要的过早安排，并尊重恢复时间。重视睡眠的社会并不是缺乏雄心；它更清楚让雄心可持续的人类条件。"
    ],
    expressions: ["public health issue 公共健康问题", "go beyond 超出", "keep the brain alert 让大脑保持警觉", "over time 长期来看", "recovery time 恢复时间"]
  },
  {
    id: "rd-economy-01",
    title: "The Hidden Value of Repair",
    topic: "经济消费",
    level: "CET-6",
    words: 203,
    article: [
      "In a consumer society, replacement is often easier than repair. When a phone battery weakens, a chair breaks, or a piece of clothing loses a button, many people simply buy a new one. This habit supports production and sales, but it also makes people less aware of the value stored in ordinary objects.",
      "Repair has economic, environmental and cultural significance. Economically, it saves money and extends the life of products. Environmentally, it reduces waste and the demand for new materials. Culturally, it changes the relationship between people and things. An object that has been repaired may no longer look perfect, but it often carries a story of care and continued use.",
      "Some cities are now encouraging repair cafes, tool libraries and community workshops. These places teach practical skills and create opportunities for neighbors to help one another. In this way, repair is not merely about fixing objects. It is also about rebuilding patience, responsibility and local connection."
    ],
    translation: [
      "在消费社会中，替换往往比修理更容易。当手机电池变弱、椅子坏了或衣服掉了一颗纽扣时，许多人只是再买一个新的。这种习惯支持生产和销售，但也让人们不太意识到普通物品中储存的价值。",
      "修理具有经济、环境和文化意义。从经济上说，它省钱并延长产品寿命。从环境上说，它减少废弃物和对新材料的需求。从文化上说，它改变了人与物之间的关系。被修理过的物品也许不再完美，但它常常承载着关怀和继续使用的故事。",
      "一些城市现在正在鼓励维修咖啡馆、工具图书馆和社区工作坊。这些地方教授实用技能，并为邻里互助创造机会。这样看来，修理不仅仅是修复物品。它也是重建耐心、责任和本地联系的过程。"
    ],
    expressions: ["consumer society 消费社会", "be aware of 意识到", "extend the life of 延长……寿命", "carry a story 承载故事", "practical skills 实用技能"]
  }
];

function createSeedWords() {
  return baseWords.map((word, index) => ({
    id: `seed-${index + 1}`,
    ...word,
    aliases: [],
    correct: 0,
    wrong: 0,
    streak: 0,
    lastAnswer: "",
    lastPracticed: null,
    nextReview: null,
    mistake: false,
    mastered: false,
    createdAt: Date.now()
  }));
}

function createSeedTranslations() {
  return baseTranslationPrompts.map(item => ({ ...item, builtIn: true, createdAt: Date.now(), updatedAt: Date.now() }));
}

function createSeedReadings() {
  return readingArticles.map(item => ({ ...item, builtIn: true, createdAt: Date.now(), updatedAt: Date.now() }));
}

function getReadingBank() {
  if (!state || !Array.isArray(state.readingBank)) return createSeedReadings();
  return state.readingBank;
}

function getTranslationBank() {
  if (!state || !Array.isArray(state.translationBank)) return createSeedTranslations();
  return state.translationBank;
}

let state = loadState();
let session = { words: [], index: 0, correct: 0, wrong: 0, answered: false };
let currentReadingId = getReadingBank()[0]?.id || "";
let currentTranslationId = getTranslationBank()[0]?.id || "";
const moduleInfo = {
  writing: {
    eyebrow: "Writing Training",
    title: "写作训练模块",
    text: "这里后续会加入写作模板、核心观点语料、核心句型默写和 AI 作文自动批改。当前请先使用单词训练。"
  }
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { words: createSeedWords(), history: [], readings: {}, readingBank: createSeedReadings(), translations: {}, translationBank: createSeedTranslations(), streakDays: 0, lastStudyDate: null };
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.words) || parsed.words.length === 0) return { words: createSeedWords(), history: [], readings: {}, readingBank: createSeedReadings(), translations: {}, translationBank: createSeedTranslations(), streakDays: 0, lastStudyDate: null };
    if (!parsed.readings) parsed.readings = {};
    if (!Array.isArray(parsed.readingBank) || parsed.readingBank.length === 0) parsed.readingBank = createSeedReadings();
    if (!parsed.translations) parsed.translations = {};
    if (!Array.isArray(parsed.translationBank) || parsed.translationBank.length === 0) parsed.translationBank = createSeedTranslations();
    
    // Ensure PWA and streak fields are safely handled
    if (parsed.streakDays === undefined) parsed.streakDays = 0;
    if (parsed.lastStudyDate === undefined) parsed.lastStudyDate = null;
    if (!parsed.history) parsed.history = [];
    
    return parsed;
  } catch {
    return { words: createSeedWords(), history: [], readings: {}, readingBank: createSeedReadings(), translations: {}, translationBank: createSeedTranslations(), streakDays: 0, lastStudyDate: null };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalize(text) {
  return String(text || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function todayStart() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function isDue(word) {
  return !word.nextReview || word.nextReview <= Date.now();
}

function getStatus(word) {
  if (word.mastered) return "已掌握";
  if (word.mistake) return "错题";
  if ((word.correct || 0) + (word.wrong || 0) === 0) return "未学";
  return "学习中";
}

function allCategories() {
  const set = new Set();
  state.words.forEach(w => String(w.category || "未分类").split(",").forEach(x => set.add(x.trim())));
  return Array.from(set).filter(Boolean).sort();
}

function routeTo(view) {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  document.querySelectorAll(".view").forEach(section => section.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  document.getElementById("pageTitle").textContent = { dashboard: "首页", practice: "开始默写", mistakes: "错题库", library: "词库管理", importExport: "备份导入" }[view];
  renderAll();
}

function showModuleHome() {
  document.getElementById("moduleHome").classList.add("active");
  document.getElementById("modulePlaceholder").classList.remove("active");
  document.getElementById("readingApp").classList.add("hidden");
  document.getElementById("vocabApp").classList.add("hidden");
  document.getElementById("translationApp").classList.add("hidden");
}

function showVocabApp() {
  document.getElementById("moduleHome").classList.remove("active");
  document.getElementById("modulePlaceholder").classList.remove("active");
  document.getElementById("readingApp").classList.add("hidden");
  document.getElementById("translationApp").classList.add("hidden");
  document.getElementById("vocabApp").classList.remove("hidden");
  routeTo("dashboard");
}

function showReadingApp() {
  document.getElementById("moduleHome").classList.remove("active");
  document.getElementById("modulePlaceholder").classList.remove("active");
  document.getElementById("vocabApp").classList.add("hidden");
  document.getElementById("translationApp").classList.add("hidden");
  document.getElementById("readingApp").classList.remove("hidden");
  renderReadingModule();
}

function showTranslationApp() {
  document.getElementById("moduleHome").classList.remove("active");
  document.getElementById("modulePlaceholder").classList.remove("active");
  document.getElementById("readingApp").classList.add("hidden");
  document.getElementById("vocabApp").classList.add("hidden");
  document.getElementById("translationApp").classList.remove("hidden");
  renderTranslationModule();
}

function showPlaceholder(moduleName) {
  const info = moduleInfo[moduleName];
  if (!info) return;
  document.getElementById("placeholderEyebrow").textContent = info.eyebrow;
  document.getElementById("placeholderTitle").textContent = info.title;
  document.getElementById("placeholderText").textContent = info.text;
  
  // Custom features preview list
  const featuresBox = document.getElementById("placeholderFeatures");
  if (featuresBox) {
    if (moduleName === "writing") {
      featuresBox.innerHTML = `
        <div class="placeholder-feature-item"><b>优秀范文精选</b>：精选教育、科技、环保等高频考题模板</div>
        <div class="placeholder-feature-item"><b>核心论点语料库</b>：按主题归纳高级词汇和地道表达</div>
        <div class="placeholder-feature-item"><b>经典句型默写</b>：强化强调句、倒装句、从句的输出训练</div>
        <div class="placeholder-feature-item"><b>AI 作文批改</b>：智能检测语法错误，提供高分替换建议</div>
      `;
    } else {
      featuresBox.innerHTML = "";
    }
  }
  
  document.getElementById("moduleHome").classList.remove("active");
  document.getElementById("modulePlaceholder").classList.add("active");
  document.getElementById("readingApp").classList.add("hidden");
  document.getElementById("vocabApp").classList.add("hidden");
  document.getElementById("translationApp").classList.add("hidden");
}

function renderAll() {
  renderDashboard();
  renderCategoryOptions();
  renderMistakes();
  renderLibrary();
  renderReadingModule();
  renderTranslationModule();
}

/* ================== Toast & Audio & Debounce & Confetti ================== */
function showToast(msg, type = "success", duration = 3000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  
  // Auto remove toast
  setTimeout(() => {
    toast.classList.add("toast-out");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, duration);
}

function playSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    if (type === "correct") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(783.99, now + 0.08); // G5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "wrong") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "triangle";
      
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(146.83, now); // D3
      osc.frequency.linearRampToValueAtTime(90, now + 0.22);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "complete") {
      const now = ctx.currentTime;
      const freqs = [261.63, 329.63, 392.00, 523.25]; // C major chord C4-E4-G4-C5
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + i * 0.04);
        gain.gain.setValueAtTime(0.05, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now + i * 0.04);
        osc.stop(now + 0.5);
      });
    }
  } catch (e) {
    // Fail silently
  }
}

function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function fireConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const colors = ["#7dd3fc", "#c084fc", "#fbcfe8", "#f472b6", "#34d399", "#fcd34d"];
  const particles = [];
  
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 5 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.06 + 0.02,
      tiltAngle: 0
    });
  }
  
  let animationId;
  let frameCount = 0;
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2.2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - i / 3) * 12;
      
      if (p.y <= canvas.height) {
        active = true;
      }
      
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    }
    
    frameCount++;
    if (active && frameCount < 180) {
      animationId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }
  
  draw();
}

/* ================== Streak & History & Chart ================== */
function updateStreak() {
  const todayStr = new Date().toISOString().split("T")[0];
  
  if (!state.lastStudyDate) {
    state.streakDays = 1;
    state.lastStudyDate = todayStr;
  } else if (state.lastStudyDate !== todayStr) {
    const lastDate = new Date(state.lastStudyDate);
    const todayDate = new Date(todayStr);
    const diffTime = Math.abs(todayDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      state.streakDays += 1;
    } else if (diffDays > 1) {
      state.streakDays = 1;
    }
    state.lastStudyDate = todayStr;
  }
  
  saveState();
  const streakEl = document.getElementById("streakDays");
  if (streakEl) streakEl.textContent = state.streakDays;
}

function recordStudyActivity(ok, en) {
  if (!state.history) state.history = [];
  state.history.push({
    timestamp: Date.now(),
    correct: ok,
    en: en
  });
  if (state.history.length > 800) {
    state.history.shift();
  }
}

function renderWeekChart() {
  const canvas = document.getElementById("weekChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio || 500;
  canvas.height = 180 * window.devicePixelRatio || 180;
  ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  
  const width = rect.width || 500;
  const height = 180;
  
  const days = [];
  const counts = [];
  const now = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    days.push(`${d.getMonth() + 1}/${d.getDate()}`);
    
    d.setHours(0,0,0,0);
    const dayStart = d.getTime();
    const dayEnd = dayStart + 86400000;
    
    const count = (state.history || []).filter(h => h.timestamp >= dayStart && h.timestamp < dayEnd).length;
    counts.push(count);
  }
  
  ctx.clearRect(0, 0, width, height);
  
  const paddingLeft = 32;
  const paddingRight = 12;
  const paddingTop = 20;
  const paddingBottom = 26;
  
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  
  const maxCount = Math.max(...counts, 10);
  
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(229, 231, 235, 0.5)";
  ctx.font = "10px sans-serif";
  ctx.textAlign = "right";
  
  const gridLines = 4;
  for (let i = 0; i <= gridLines; i++) {
    const y = paddingTop + (chartHeight / gridLines) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(width - paddingRight, y);
    ctx.stroke();
    
    const val = Math.round(maxCount - (maxCount / gridLines) * i);
    ctx.fillText(val, paddingLeft - 8, y + 3);
  }
  
  const points = counts.map((c, i) => {
    const x = paddingLeft + (chartWidth / 6) * i;
    const y = paddingTop + chartHeight - (c / maxCount) * chartHeight;
    return { x, y };
  });
  
  const grad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartHeight);
  grad.addColorStop(0, "rgba(125, 211, 252, 0.2)");
  grad.addColorStop(1, "rgba(125, 211, 252, 0)");
  
  ctx.beginPath();
  ctx.moveTo(points[0].x, paddingTop + chartHeight);
  ctx.lineTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.lineTo(points[points.length - 1].x, paddingTop + chartHeight);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  
  ctx.strokeStyle = "#7dd3fc";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.stroke();
  
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  days.forEach((day, i) => {
    const pt = points[i];
    ctx.fillStyle = "rgba(125, 211, 252, 0.4)";
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "rgba(229, 231, 235, 0.7)";
    ctx.fillText(day, pt.x, height - 8);
  });
}

/* ================== Typewriter ================== */
function initTypewriter() {
  const el = document.getElementById("heroTypewriter");
  if (!el) return;
  const phrases = ["选择今天的训练", "每天进步一点点", "六级，我来了！", "冲刺写作与翻译！"];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }
    
    let delay = 140 - Math.random() * 60;
    if (isDeleting) delay /= 2;
    
    if (!isDeleting && charIdx === currentPhrase.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 500;
    }
    
    setTimeout(type, delay);
  }
  
  type();
}

/* ================== App Rendering Logic ================== */
function renderDashboard() {
  const total = state.words.length;
  const due = state.words.filter(isDue).length;
  const mistakes = state.words.filter(w => w.mistake).length;
  const mastered = state.words.filter(w => w.mastered).length;
  const correct = state.words.reduce((s, w) => s + (w.correct || 0), 0);
  const wrong = state.words.reduce((s, w) => s + (w.wrong || 0), 0);
  const acc = correct + wrong ? Math.round((correct / (correct + wrong)) * 100) : 0;
  
  document.getElementById("totalWords").textContent = total;
  document.getElementById("dueWords").textContent = due;
  document.getElementById("mistakeWords").textContent = mistakes;
  document.getElementById("masteredWords").textContent = mastered;
  
  const streakEl = document.getElementById("streakDays");
  if (streakEl) streakEl.textContent = state.streakDays || 0;
  
  document.getElementById("accuracyText").textContent = `正确率 ${acc}%`;
  document.getElementById("masterProgress").style.width = `${total ? Math.round(mastered / total * 100) : 0}%`;
  document.getElementById("progressHint").textContent = mastered ? `你已经掌握 ${mastered} 个词，继续用错题默写巩固主动输出。` : "先从写作高频动词开始默写，最容易提升作文表达。";
  
  // Render Week Chart
  setTimeout(renderWeekChart, 50);
}

function renderCategoryOptions() {
  const select = document.getElementById("filterCategory");
  if (!select) return;
  const current = select.value;
  select.innerHTML = `<option value="all">全部</option>` + allCategories().map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  select.value = [...select.options].some(o => o.value === current) ? current : "all";
}

function filterWords() {
  const part = document.getElementById("filterPart").value;
  const category = document.getElementById("filterCategory").value;
  const status = document.getElementById("filterStatus").value;
  return state.words.filter(w => {
    if (part !== "all" && w.part !== part) return false;
    if (category !== "all" && !String(w.category || "").split(",").map(x => x.trim()).includes(category)) return false;
    if (status === "due" && !isDue(w)) return false;
    if (status === "mistake" && !w.mistake) return false;
    if (status === "new" && getStatus(w) !== "未学") return false;
    if (status === "learning" && getStatus(w) !== "学习中") return false;
    if (status === "mastered" && !w.mastered) return false;
    return true;
  });
}

function buildSession(words = null) {
  const count = Math.max(1, Math.min(100, Number(document.getElementById("quizCount").value || 20)));
  const pool = [...(words || filterWords())];
  pool.sort((a, b) => {
    const scoreA = (a.mistake ? -100 : 0) + (isDue(a) ? -50 : 0) + (a.wrong || 0) * -5 + Math.random();
    const scoreB = (b.mistake ? -100 : 0) + (isDue(b) ? -50 : 0) + (b.wrong || 0) * -5 + Math.random();
    return scoreA - scoreB;
  });
  session = { words: pool.slice(0, count), index: 0, correct: 0, wrong: 0, answered: false };
  renderQuiz();
}

function renderQuiz(result = null) {
  const card = document.getElementById("quizCard");
  if (!card) return;
  document.getElementById("sessionCorrect").textContent = session.correct;
  document.getElementById("sessionWrong").textContent = session.wrong;
  document.getElementById("sessionMeta").textContent = session.words.length ? `第 ${Math.min(session.index + 1, session.words.length)} / ${session.words.length} 题` : "尚未开始";
  
  if (!session.words.length) {
    card.innerHTML = `<div class="quiz-empty"><h3>没有匹配的单词</h3><p>请调整范围，或先去词库添加单词。</p></div>`;
    return;
  }
  
  if (session.index >= session.words.length) {
    let perfectHtml = "";
    if (session.wrong === 0 && session.correct > 0) {
      perfectHtml = `<p class="success-color" style="font-weight:bold;margin:10px 0;color:#34d399;font-size:15px;">🏆 完美！本轮默写全部正确！ 🏆</p>`;
      setTimeout(fireConfetti, 150);
      playSound("complete");
    }
    card.innerHTML = `
      <div class="quiz-empty">
        <h3>本轮完成</h3>
        <p>正确 ${session.correct} 个，错误 ${session.wrong} 个。错题会自动进入错题库。</p>
        ${perfectHtml}
        <button class="primary-btn" onclick="buildSession()">再来一轮</button>
      </div>
    `;
    return;
  }
  
  const word = session.words[session.index];
  card.innerHTML = `
    <div class="quiz-top"><span>第 ${session.index + 1} / ${session.words.length} 题</span><span>${escapeHtml(getStatus(word))}</span></div>
    <div class="prompt-box">
      <div class="badge-row"><span class="badge">${escapeHtml(word.part)}</span>${String(word.category).split(",").map(c => `<span class="badge">${escapeHtml(c.trim())}</span>`).join("")}</div>
      <div class="cn">${escapeHtml(word.cn)}</div>
      <p class="muted">请根据中文释义默写英文，大小写不敏感。</p>
    </div>
    <div class="answer-row">
      <input id="answerInput" autocomplete="off" placeholder="请输入英文单词或短语" ${session.answered ? "disabled" : ""} />
      <button class="primary-btn" id="submitAnswerBtn">提交</button>
      <button class="ghost-btn" id="dontKnowBtn">不会</button>
    </div>
    ${result || ""}
  `;
  
  const input = document.getElementById("answerInput");
  if (input) {
    input.focus();
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") checkAnswer();
    });
  }
  
  document.getElementById("submitAnswerBtn").onclick = session.answered ? nextQuestion : checkAnswer;
  document.getElementById("dontKnowBtn").onclick = () => checkAnswer(true);
}

function checkAnswer(forceWrong = false) {
  if (session.index >= session.words.length) return;
  const word = session.words[session.index];
  const input = document.getElementById("answerInput");
  const answer = input ? input.value : "";
  const accepted = [word.en, ...(word.aliases || [])].map(normalize);
  const ok = !forceWrong && accepted.includes(normalize(answer));
  const idx = state.words.findIndex(w => w.id === word.id);
  
  if (idx >= 0) {
    updateMemory(state.words[idx], ok, answer);
    recordStudyActivity(ok, word.en);
    if (ok) updateStreak();
  }
  
  saveState();
  session.answered = true;
  if (ok) {
    session.correct += 1;
    playSound("correct");
  } else {
    session.wrong += 1;
    playSound("wrong");
  }
  
  const result = `
    <div class="result-box ${ok ? "correct" : "wrong"}">
      <b>${ok ? "答对了 ✦" : "需要复习 ↺"}</b><br />
      正确答案：<b>${escapeHtml(word.en)}</b><br />
      你的答案：${escapeHtml(answer || "（不会）")}<br />
      ${word.example ? `例句：${escapeHtml(word.example)}` : ""}
      <div style="margin-top:12px"><button class="primary-btn" onclick="nextQuestion()">下一题</button></div>
    </div>
  `;
  renderQuiz(result);
  const btn = document.getElementById("submitAnswerBtn");
  if (btn) btn.textContent = "下一题";
  renderAll();
}

function updateMemory(word, ok, answer) {
  const now = Date.now();
  word.lastPracticed = now;
  word.lastAnswer = answer || "";
  if (ok) {
    word.correct = (word.correct || 0) + 1;
    word.streak = (word.streak || 0) + 1;
    if (word.streak >= 3) {
      word.mastered = true;
      word.mistake = false;
      word.nextReview = now + 7 * 86400000;
    } else if (word.streak === 2) {
      word.nextReview = now + 3 * 86400000;
    } else {
      word.nextReview = now + 86400000;
    }
  } else {
    word.wrong = (word.wrong || 0) + 1;
    word.streak = 0;
    word.mistake = true;
    word.mastered = false;
    word.nextReview = now;
  }
}

function nextQuestion() {
  session.index += 1;
  session.answered = false;
  renderQuiz();
}

window.nextQuestion = nextQuestion;
window.buildSession = buildSession;

function renderMistakes() {
  const box = document.getElementById("mistakeList");
  if (!box) return;
  
  // Populate category options inside mistakes head filter dropdown
  const categoryFilter = document.getElementById("mistakeCategoryFilter");
  if (categoryFilter) {
    const current = categoryFilter.value;
    const categories = allCategories();
    categoryFilter.innerHTML = `<option value="all">全部分类</option>` + categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
    categoryFilter.value = ["all", ...categories].includes(current) ? current : "all";
  }
  
  const part = document.getElementById("mistakePartFilter")?.value || "all";
  const category = categoryFilter?.value || "all";
  
  const items = state.words.filter(w => {
    if (!w.mistake) return false;
    if (part !== "all" && w.part !== part) return false;
    if (category !== "all" && !String(w.category || "").split(",").map(x => x.trim()).includes(category)) return false;
    return true;
  }).sort((a, b) => (b.wrong || 0) - (a.wrong || 0));
  
  box.innerHTML = items.length ? items.map(wordItemHtml).join("") : `<p class="muted">没有符合条件的错题。答错的单词会自动进入这里。</p>`;
  bindWordActions(box);
}

function renderLibrary() {
  const box = document.getElementById("libraryList");
  if (!box) return;
  const q = normalize(document.getElementById("librarySearch")?.value || "");
  const items = state.words.filter(w => !q || normalize(`${w.en} ${w.cn} ${w.part} ${w.category}`).includes(q));
  box.innerHTML = items.map(wordItemHtml).join("");
  bindWordActions(box);
}

function wordItemHtml(w) {
  const total = (w.correct || 0) + (w.wrong || 0);
  const rate = total ? Math.round((w.correct || 0) / total * 100) : 0;
  return `
    <div class="word-item" data-id="${escapeHtml(w.id)}">
      <div class="word-main">
        <strong>${escapeHtml(w.en)}</strong>
        <p>${escapeHtml(w.cn)}</p>
        <div class="word-meta">
          <span class="badge">${escapeHtml(w.part)}</span>
          ${String(w.category || "").split(",").map(c => `<span class="badge">${escapeHtml(c.trim())}</span>`).join("")}
          <span class="badge">${escapeHtml(getStatus(w))}</span>
          <span class="badge">正确率 ${rate}%</span>
          <span class="badge">错 ${w.wrong || 0}</span>
        </div>
      </div>
      <div class="word-actions">
        <button class="icon-btn" title="标记掌握" data-action="master">✓</button>
        <button class="icon-btn" title="移出错题" data-action="clearMistake">↺</button>
        <button class="icon-btn danger" title="删除" data-action="delete">×</button>
      </div>
    </div>
  `;
}

function bindWordActions(root) {
  root.querySelectorAll("button[data-action]").forEach(btn => {
    btn.onclick = () => {
      const id = btn.closest(".word-item").dataset.id;
      const word = state.words.find(w => w.id === id);
      if (!word) return;
      const action = btn.dataset.action;
      if (action === "master") {
        word.mastered = true;
        word.mistake = false;
        word.streak = Math.max(3, word.streak || 0);
        word.nextReview = Date.now() + 7 * 86400000;
        showToast(`已将「${word.en}」标记为掌握`, "success");
      }
      if (action === "clearMistake") {
        word.mistake = false;
        showToast(`已将「${word.en}」移出错题库`, "success");
      }
      if (action === "delete" && confirm(`删除 ${word.en}？`)) {
        state.words = state.words.filter(w => w.id !== id);
        showToast(`已删除单词「${word.en}」`, "error");
      }
      saveState();
      renderAll();
    };
  });
}

function getReadingRecord(id) {
  if (!state.readings) state.readings = {};
  if (!state.readings[id]) state.readings[id] = { note: "", favorite: false, read: false, mastered: false, translationVisible: false, updatedAt: null };
  return state.readings[id];
}

function filteredReadingArticles() {
  const topic = document.getElementById("readingTopicFilter")?.value || "all";
  const status = document.getElementById("readingStatusFilter")?.value || "all";
  return getReadingBank().filter(item => {
    const record = getReadingRecord(item.id);
    if (topic !== "all" && item.topic !== topic) return false;
    if (status === "favorite" && !record.favorite) return false;
    if (status === "read" && !record.read) return false;
    if (status === "mastered" && !record.mastered) return false;
    return true;
  });
}

function renderReadingModule() {
  const app = document.getElementById("readingApp");
  if (!app) return;
  renderReadingFilters();
  renderReadingList();
  renderReadingArticle();
}

function renderReadingFilters() {
  const select = document.getElementById("readingTopicFilter");
  if (!select) return;
  const current = select.value;
  const topics = [...new Set(getReadingBank().map(item => item.topic))];
  select.innerHTML = `<option value="all">全部</option>` + topics.map(topic => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`).join("");
  select.value = topics.includes(current) ? current : "all";
}

function renderReadingList() {
  const list = document.getElementById("readingList");
  const count = document.getElementById("readingCount");
  if (!list || !count) return;
  const items = filteredReadingArticles();
  count.textContent = `${items.length} 篇`;
  if (!items.some(item => item.id === currentReadingId) && items[0]) currentReadingId = items[0].id;
  list.innerHTML = items.length ? items.map(item => {
    const record = getReadingRecord(item.id);
    return `
      <button class="reading-item ${item.id === currentReadingId ? "active" : ""}" data-reading-id="${escapeHtml(item.id)}">
        <span>${escapeHtml(item.topic)} · ${escapeHtml(item.level)} · ${item.words}词</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${record.read ? "已读" : "未读"}${record.favorite ? " · 已收藏" : ""}${record.mastered ? " · 已掌握" : ""}</small>
      </button>
    `;
  }).join("") : `<p class="muted">没有符合条件的文章。</p>`;
  list.querySelectorAll("[data-reading-id]").forEach(btn => {
    btn.onclick = () => {
      saveCurrentReading(false);
      currentReadingId = btn.dataset.readingId;
      renderReadingModule();
    };
  });
}

function renderReadingArticle() {
  const item = getReadingBank().find(x => x.id === currentReadingId) || getReadingBank()[0];
  if (!item) return;
  const record = getReadingRecord(item.id);
  document.getElementById("readingTitle").textContent = item.title;
  document.getElementById("readingMeta").textContent = `${item.topic} · ${item.level} · 约 ${item.words} 词`;
  document.getElementById("readingArticle").innerHTML = item.article.map(p => `<p>${escapeHtml(p)}</p>`).join("");
  document.getElementById("readingTranslation").innerHTML = item.translation.map(p => `<p>${escapeHtml(p)}</p>`).join("");
  document.getElementById("readingTranslation").classList.toggle("hidden", !record.translationVisible);
  document.getElementById("readingToggleTranslationBtn").textContent = record.translationVisible ? "隐藏翻译" : "显示翻译";
  document.getElementById("readingExpressions").innerHTML = item.expressions.map(x => `<span class="expression-chip">${escapeHtml(x)}</span>`).join("");
  document.getElementById("readingNote").value = record.note || "";
  document.getElementById("readingFavoriteBtn").textContent = record.favorite ? "取消收藏" : "收藏";
  document.getElementById("readingReadBtn").textContent = record.read ? "取消已读" : "标记已读";
  document.getElementById("readingMasterBtn").textContent = record.mastered ? "取消掌握" : "标记掌握";
}

function saveCurrentReading(showTip = true) {
  const item = getReadingBank().find(x => x.id === currentReadingId);
  const input = document.getElementById("readingNote");
  if (!item || !input) return;
  const record = getReadingRecord(item.id);
  record.note = input.value;
  record.updatedAt = Date.now();
  saveState();
  renderReadingList();
  if (showTip) showToast("阅读笔记已保存", "success");
}

function splitParagraphs(text) {
  return String(text || "").split(/\n\s*\n/).map(x => x.trim()).filter(Boolean);
}

function countEnglishWords(paragraphs) {
  return paragraphs.join(" ").match(/[A-Za-z]+(?:[-'][A-Za-z]+)?/g)?.length || 0;
}

function normalizeReadingArticle(item) {
  const article = Array.isArray(item.article) ? item.article : splitParagraphs(item.article);
  const translation = Array.isArray(item.translation) ? item.translation : splitParagraphs(item.translation);
  const expressions = Array.isArray(item.expressions) ? item.expressions : String(item.expressions || "").split(/\r?\n/).map(x => x.trim()).filter(Boolean);
  return {
    id: String(item.id || `custom-rd-${Date.now()}-${Math.random().toString(16).slice(2)}`).trim(),
    title: String(item.title || "未命名文章").trim(),
    topic: String(item.topic || "一般主题").trim(),
    level: String(item.level || "CET-6").trim(),
    words: Number(item.words) || countEnglishWords(article),
    article,
    translation,
    expressions,
    builtIn: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}

function parseReadingTextBlock(block) {
  const getField = name => {
    const match = block.match(new RegExp(`${name}[：:]\\s*([\\s\\S]*?)(?=\\n(?:标题|主题|英文|翻译|表达)[：:]|$)`));
    return match ? match[1].trim() : "";
  };
  return normalizeReadingArticle({
    title: getField("标题"),
    topic: getField("主题"),
    article: getField("英文"),
    translation: getField("翻译"),
    expressions: getField("表达")
  });
}

function parseReadingImports(raw) {
  const text = String(raw || "").trim();
  if (!text) return [];
  if (text.startsWith("[") || text.startsWith("{")) {
    const data = JSON.parse(text);
    return (Array.isArray(data) ? data : [data]).map(normalizeReadingArticle);
  }
  return text.split(/\n-{3,}\n?/).map(x => x.trim()).filter(Boolean).map(parseReadingTextBlock);
}

function importReadingArticles() {
  const box = document.getElementById("readingImportBox");
  if (!box) return;
  try {
    const items = parseReadingImports(box.value).filter(item => item.title && item.article.length && item.translation.length);
    if (!items.length) throw new Error("没有识别到有效文章，请检查格式");
    if (!state.readingBank) state.readingBank = createSeedReadings();
    state.readingBank.unshift(...items);
    currentReadingId = items[0].id;
    box.value = "";
    saveState();
    renderReadingModule();
    showToast(`导入成功：${items.length} 篇文章`, "success");
  } catch (err) {
    showToast(`导入失败：${err.message}`, "error");
  }
}

function getTranslationRecord(id) {
  if (!state.translations) state.translations = {};
  if (!state.translations[id]) state.translations[id] = { answer: "", favorite: false, mastered: false, updatedAt: null, referenceVisible: false };
  return state.translations[id];
}

function filteredTranslationPrompts() {
  const topic = document.getElementById("translationTopicFilter")?.value || "all";
  const status = document.getElementById("translationStatusFilter")?.value || "all";
  return getTranslationBank().filter(item => {
    const record = getTranslationRecord(item.id);
    if (topic !== "all" && item.topic !== topic) return false;
    if (status === "favorite" && !record.favorite) return false;
    if (status === "mastered" && !record.mastered) return false;
    if (status === "unfinished" && record.answer.trim()) return false;
    return true;
  });
}

function renderTranslationModule() {
  const app = document.getElementById("translationApp");
  if (!app) return;
  renderTranslationFilters();
  renderTranslationList();
  renderTranslationQuestion();
}

function renderTranslationFilters() {
  const select = document.getElementById("translationTopicFilter");
  if (!select) return;
  const current = select.value;
  const topics = [...new Set(getTranslationBank().map(item => item.topic))];
  select.innerHTML = `<option value="all">全部</option>` + topics.map(topic => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`).join("");
  select.value = topics.includes(current) ? current : "all";
}

function renderTranslationList() {
  const list = document.getElementById("translationList");
  const count = document.getElementById("translationCount");
  if (!list || !count) return;
  const items = filteredTranslationPrompts();
  count.textContent = `${items.length} 题`;
  if (!items.some(item => item.id === currentTranslationId) && items[0]) currentTranslationId = items[0].id;
  list.innerHTML = items.length ? items.map(item => {
    const record = getTranslationRecord(item.id);
    return `
      <button class="translation-item ${item.id === currentTranslationId ? "active" : ""}" data-translation-id="${escapeHtml(item.id)}">
        <span>${escapeHtml(item.topic)} · ${escapeHtml(item.year)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${record.answer.trim() ? "已保存" : "未完成"}${record.favorite ? " · 已收藏" : ""}${record.mastered ? " · 已掌握" : ""}</small>
      </button>
    `;
  }).join("") : `<p class="muted">没有符合条件的题目。</p>`;
  list.querySelectorAll("[data-translation-id]").forEach(btn => {
    btn.onclick = () => {
      saveCurrentTranslation(false);
      currentTranslationId = btn.dataset.translationId;
      renderTranslationModule();
    };
  });
}

function renderTranslationQuestion() {
  const item = getTranslationBank().find(x => x.id === currentTranslationId) || getTranslationBank()[0];
  if (!item) return;
  const record = getTranslationRecord(item.id);
  document.getElementById("translationTitle").textContent = item.title;
  document.getElementById("translationMeta").textContent = `${item.year} · ${item.topic} · ${item.source}`;
  document.getElementById("translationPrompt").textContent = item.prompt;
  document.getElementById("translationAnswer").value = record.answer || "";
  document.getElementById("translationFavoriteBtn").textContent = record.favorite ? "取消收藏" : "收藏";
  document.getElementById("translationMasterBtn").textContent = record.mastered ? "取消掌握" : "标记掌握";
  document.getElementById("translationReference").innerHTML = `<p>${escapeHtml(item.reference)}</p>`;
  document.getElementById("translationReference").classList.toggle("hidden", !record.referenceVisible);
  document.getElementById("translationToggleReferenceBtn").textContent = record.referenceVisible ? "隐藏参考" : "显示参考";
  document.getElementById("translationExpressions").innerHTML = (item.expressions || []).map(x => `<span class="expression-chip">${escapeHtml(x)}</span>`).join("");
  fillTranslationForm(item);
}

function saveCurrentTranslation(showTip = true) {
  const item = getTranslationBank().find(x => x.id === currentTranslationId);
  const input = document.getElementById("translationAnswer");
  if (!item || !input) return;
  const record = getTranslationRecord(item.id);
  record.answer = input.value;
  record.updatedAt = Date.now();
  saveState();
  renderTranslationList();
  if (showTip) showToast("我的译文已保存", "success");
}

function fillTranslationForm(item = null) {
  const form = document.getElementById("translationForm");
  if (!form) return;
  document.getElementById("translationEditId").value = item?.id || "";
  document.getElementById("translationFormTitle").value = item?.title || "";
  document.getElementById("translationFormTopic").value = item?.topic || "";
  document.getElementById("translationFormYear").value = item?.year || "";
  document.getElementById("translationFormSource").value = item?.source || "";
  document.getElementById("translationFormPrompt").value = item?.prompt || "";
  document.getElementById("translationFormReference").value = item?.reference || "";
  document.getElementById("translationFormExpressions").value = (item?.expressions || []).join("\n");
}

function resetTranslationForm() {
  fillTranslationForm({
    id: "",
    title: "",
    topic: "",
    year: "自定义",
    source: "手动添加",
    prompt: "",
    reference: "",
    expressions: []
  });
  document.getElementById("translationFormTitle").focus();
}

function saveTranslationPromptFromForm(event) {
  event.preventDefault();
  const id = document.getElementById("translationEditId").value || `custom-tr-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const item = {
    id,
    title: document.getElementById("translationFormTitle").value.trim(),
    topic: document.getElementById("translationFormTopic").value.trim(),
    year: document.getElementById("translationFormYear").value.trim() || "自定义",
    source: document.getElementById("translationFormSource").value.trim() || "手动添加",
    prompt: document.getElementById("translationFormPrompt").value.trim(),
    reference: document.getElementById("translationFormReference").value.trim(),
    expressions: document.getElementById("translationFormExpressions").value.split(/\r?\n/).map(x => x.trim()).filter(Boolean),
    builtIn: false,
    updatedAt: Date.now()
  };
  if (!item.title || !item.topic || !item.prompt || !item.reference) {
    showToast("请至少填写标题、主题、中文原文和参考译文", "error");
    return;
  }
  if (!state.translationBank) state.translationBank = createSeedTranslations();
  const index = state.translationBank.findIndex(x => x.id === id);
  if (index >= 0) state.translationBank[index] = { ...state.translationBank[index], ...item };
  else state.translationBank.unshift({ ...item, createdAt: Date.now() });
  currentTranslationId = id;
  saveState();
  renderTranslationModule();
  showToast("翻译题已保存", "success");
}

function deleteCurrentTranslationPrompt() {
  const item = getTranslationBank().find(x => x.id === currentTranslationId);
  if (!item) return;
  if (!confirm(`删除翻译题「${item.title}」？你的练习答案也会一起删除。`)) return;
  state.translationBank = getTranslationBank().filter(x => x.id !== currentTranslationId);
  if (state.translations) delete state.translations[currentTranslationId];
  if (!state.translationBank.length) state.translationBank = createSeedTranslations();
  currentTranslationId = state.translationBank[0]?.id || "";
  saveState();
  renderTranslationModule();
  showToast("翻译题已成功删除", "error");
}

function addWord({ en, cn, part, category, example }) {
  const exists = state.words.some(w => normalize(w.en) === normalize(en));
  if (exists) throw new Error("该英文已存在词库中");
  state.words.unshift({
    id: `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    en: en.trim(), cn: cn.trim(), part: part || "动词", category: category || "自定义", example: example || "",
    aliases: [], correct: 0, wrong: 0, streak: 0, lastAnswer: "", lastPracticed: null, nextReview: null, mistake: false, mastered: false, createdAt: Date.now()
  });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function initEvents() {
  document.querySelectorAll(".module-card").forEach(btn => btn.onclick = () => {
    if (btn.dataset.module === "vocab") showVocabApp();
    else if (btn.dataset.module === "reading") showReadingApp();
    else if (btn.dataset.module === "translation") showTranslationApp();
    else showPlaceholder(btn.dataset.module);
  });
  document.getElementById("moduleHomeBtn").onclick = showModuleHome;
  document.getElementById("readingHomeBtn").onclick = () => {
    saveCurrentReading(false);
    showModuleHome();
  };
  document.getElementById("readingSaveBtn").onclick = () => saveCurrentReading();
  document.getElementById("readingImportBtn").onclick = importReadingArticles;
  document.getElementById("readingTopicFilter").onchange = renderReadingModule;
  document.getElementById("readingStatusFilter").onchange = renderReadingModule;
  document.getElementById("readingToggleTranslationBtn").onclick = () => {
    const record = getReadingRecord(currentReadingId);
    record.translationVisible = !record.translationVisible;
    saveState();
    renderReadingArticle();
  };
  document.getElementById("readingFavoriteBtn").onclick = () => {
    const record = getReadingRecord(currentReadingId);
    record.favorite = !record.favorite;
    saveState();
    renderReadingModule();
  };
  document.getElementById("readingReadBtn").onclick = () => {
    const record = getReadingRecord(currentReadingId);
    record.read = !record.read;
    saveState();
    renderReadingModule();
  };
  document.getElementById("readingMasterBtn").onclick = () => {
    const record = getReadingRecord(currentReadingId);
    record.mastered = !record.mastered;
    if (record.mastered) record.read = true;
    saveState();
    renderReadingModule();
  };
  document.getElementById("translationHomeBtn").onclick = () => {
    saveCurrentTranslation(false);
    showModuleHome();
  };
  document.getElementById("translationSaveBtn").onclick = () => saveCurrentTranslation();
  document.getElementById("translationForm").onsubmit = saveTranslationPromptFromForm;
  document.getElementById("translationNewBtn").onclick = resetTranslationForm;
  document.getElementById("translationDeleteBtn").onclick = deleteCurrentTranslationPrompt;
  document.getElementById("translationTopicFilter").onchange = renderTranslationModule;
  document.getElementById("translationStatusFilter").onchange = renderTranslationModule;
  document.getElementById("translationToggleReferenceBtn").onclick = () => {
    const record = getTranslationRecord(currentTranslationId);
    record.referenceVisible = !record.referenceVisible;
    saveState();
    renderTranslationQuestion();
  };
  document.getElementById("translationFavoriteBtn").onclick = () => {
    const record = getTranslationRecord(currentTranslationId);
    record.favorite = !record.favorite;
    saveState();
    renderTranslationModule();
  };
  document.getElementById("translationMasterBtn").onclick = () => {
    const record = getTranslationRecord(currentTranslationId);
    record.mastered = !record.mastered;
    saveState();
    renderTranslationModule();
  };
  document.getElementById("placeholderBackBtn").onclick = showModuleHome;
  document.getElementById("placeholderVocabBtn").onclick = showVocabApp;
  document.querySelectorAll(".nav-btn").forEach(btn => btn.onclick = () => routeTo(btn.dataset.view));
  document.querySelectorAll("[data-jump]").forEach(btn => btn.onclick = () => routeTo(btn.dataset.jump));
  document.getElementById("buildSessionBtn").onclick = () => buildSession();
  document.getElementById("endSessionBtn").onclick = () => { session = { words: [], index: 0, correct: 0, wrong: 0, answered: false }; renderQuiz(); };
  document.getElementById("practiceMistakesBtn").onclick = () => { routeTo("practice"); buildSession(state.words.filter(w => w.mistake)); };
  
  document.querySelectorAll(".quick-btn").forEach(btn => btn.onclick = () => {
    routeTo("practice");
    const type = btn.dataset.quick;
    const words = state.words.filter(w => type === "due" ? isDue(w) : type === "mistake" ? w.mistake : type === "verb" ? w.part === "动词" : w.part === "名词");
    buildSession(words);
  });
  
  document.getElementById("wordForm").onsubmit = e => {
    e.preventDefault();
    try {
      const englishInput = document.getElementById("englishInput");
      const chineseInput = document.getElementById("chineseInput");
      const partInput = document.getElementById("partInput");
      const categoryInput = document.getElementById("categoryInput");
      const exampleInput = document.getElementById("exampleInput");
      
      addWord({ en: englishInput.value, cn: chineseInput.value, part: partInput.value, category: categoryInput.value, example: exampleInput.value });
      saveState(); 
      e.target.reset(); 
      categoryInput.value = "自定义"; 
      renderAll(); 
      showToast("单词添加成功", "success");
    } catch (err) { 
      showToast(err.message, "error"); 
    }
  };
  
  // debounced library search
  document.getElementById("librarySearch").oninput = debounce(renderLibrary, 200);
  
  document.getElementById("bulkImportBtn").onclick = () => {
    const bulkImport = document.getElementById("bulkImport");
    const lines = bulkImport.value.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
    let ok = 0, fail = 0;
    for (const line of lines) {
      const [en, cn, part = "动词", category = "自定义", example = ""] = line.split("|").map(x => x.trim());
      if (!en || !cn) { fail++; continue; }
      try { addWord({ en, cn, part, category, example }); ok++; } catch { fail++; }
    }
    saveState(); 
    bulkImport.value = ""; 
    renderAll(); 
    showToast(`导入完成：成功 ${ok} 个，跳过 ${fail} 个`, ok > 0 ? "success" : "error");
  };
  
  document.getElementById("exportBtn").onclick = () => {
    const exportBox = document.getElementById("exportBox");
    exportBox.value = JSON.stringify(state, null, 2); 
    exportBox.select();
    showToast("JSON 数据已成功导出并全选", "success");
  };
  
  document.getElementById("importFile").onchange = async e => {
    const file = e.target.files[0]; 
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data.words)) throw new Error("格式不正确");
      if (!data.readings) data.readings = {};
      if (!Array.isArray(data.readingBank)) data.readingBank = createSeedReadings();
      if (!data.translations) data.translations = {};
      if (!Array.isArray(data.translationBank)) data.translationBank = createSeedTranslations();
      
      state = data; 
      saveState(); 
      renderAll(); 
      showToast("数据导入成功", "success");
    } catch (err) { 
      showToast(`导入失败：${err.message}`, "error"); 
    }
  };
  
  document.getElementById("resetDemoBtn").onclick = () => {
    if (!confirm("会用内置词库覆盖当前数据，确定吗？")) return;
    state = { words: createSeedWords(), history: [], readings: state.readings || {}, readingBank: state.readingBank || createSeedReadings(), translations: state.translations || {}, translationBank: state.translationBank || createSeedTranslations(), streakDays: 0, lastStudyDate: null }; 
    saveState(); 
    renderAll(); 
    renderQuiz();
    showToast("内置词库已成功重置", "success");
  };
  
  // Mistake Filter Handlers
  const mistakePartFilter = document.getElementById("mistakePartFilter");
  const mistakeCategoryFilter = document.getElementById("mistakeCategoryFilter");
  if (mistakePartFilter && mistakeCategoryFilter) {
    mistakePartFilter.onchange = renderMistakes;
    mistakeCategoryFilter.onchange = renderMistakes;
  }
  
  // Mobile Sidebar Slide-out Drawer Toggle & Overlay Control
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggleBtn = document.getElementById("sidebarToggle");
  
  if (toggleBtn && sidebar && overlay) {
    toggleBtn.onclick = () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
    };
    overlay.onclick = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    };
    
    // Clicking navigation closes slide-out drawer on mobile
    document.querySelectorAll(".nav-btn").forEach(btn => {
      const oldClick = btn.onclick;
      btn.onclick = () => {
        if (oldClick) oldClick();
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      };
    });
  }
  
  // Keyboard Shortcuts in practiceView
  document.addEventListener("keydown", e => {
    const practiceView = document.getElementById("practiceView");
    if (!practiceView || !practiceView.classList.contains("active") || !session.words.length) return;
    
    if (e.key === "Escape") {
      e.preventDefault();
      session = { words: [], index: 0, correct: 0, wrong: 0, answered: false };
      renderQuiz();
      showToast("本轮默写练习已结束", "error");
      return;
    }
    
    if (e.key === "Enter") {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.id === "answerInput") {
        return; // locally managed inside answerInput listener
      }
      e.preventDefault();
      const btn = document.getElementById("submitAnswerBtn");
      if (btn) btn.click();
    }
  });
}

// Initialize Typewriter and App
initEvents();
renderAll();
initTypewriter();
