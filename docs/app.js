const $ = (id) => document.getElementById(id);
const form = $("lessonForm"), resultArea = $("resultArea"), resultText = $("resultText");
const emptyState = $("emptyState"), copyBtn = $("copyBtn"), printBtn = $("printBtn");
$("sampleBtn").addEventListener("click", () => {
  $("grade").value = "الخامس الابتدائي"; $("subject").value = "اللغة العربية";
  $("topic").value = "علامات الترقيم"; $("duration").value = "45"; $("students").value = "30";
  $("objectives").value = "أن يميز المتعلم بين النقطة والفاصلة وعلامة الاستفهام.\nأن يوظف علامات الترقيم في كتابة فقرة قصيرة.";
  $("prior").value = "يعرف المتعلم تكوين الجملة ويقرأ فقرة قصيرة.";
  $("resources").value = "السبورة، بطاقات جمل، أوراق عمل";
});
function clean(value, fallback) { const text = value.trim(); return text || fallback; }
function makePlan(d) {
  const mins = Number(d.duration), intro = Math.max(5,Math.round(mins*.15)), explore = Math.max(8,Math.round(mins*.25)), practice = Math.max(8,Math.round(mins*.35)), assess = Math.max(5,mins-intro-explore-practice);
  const outcomes = d.objectives.split(/[\n،؛]+/).map(x=>x.trim()).filter(Boolean);
  const outcomeText = outcomes.length ? outcomes.map((x,i)=>(i+1)+". "+x).join("\n") : "1. أن يشرح المتعلم الفكرة الرئيسة للدرس بلغته.\n2. أن يطبق المفهوم في مثال جديد.\n3. أن يراجع أداءه وفق معيار واضح.";
  return [
"المساعد التربوي للمعلم | تصور أولي لخطة درس","=".repeat(48),"أولًا: بيانات الدرس",
"المادة: "+d.subject,"الصف: "+d.grade,"موضوع الدرس: "+d.topic,"الزمن: "+mins+" دقيقة","عدد المتعلمين: "+(d.students||"غير محدد"),"الموارد: "+d.resources,
"","ثانيًا: نواتج التعلم",outcomeText,"","ثالثًا: التهيئة والخبرات السابقة ("+intro+" دقائق)",
"- يعرض المعلم سؤالًا أو موقفًا قصيرًا يرتبط بموضوع «"+d.topic+"».","- يستمع إلى استجابات المتعلمين ويستكشف تصوراتهم دون إصدار أحكام متسرعة.","- يربط الدرس الجديد بالخبرات السابقة: "+d.prior+".",
"","رابعًا: بناء التعلم واستكشاف المفهوم ("+explore+" دقائق)","- يقدم المعلم مثالًا واضحًا مرتبطًا بموضوع الدرس.","- يفكر المتعلمون فرديًا، ثم يتبادلون التفسير في أزواج.","- يناقش المعلم الإجابات ويصحح التصورات غير الدقيقة مع توضيح السبب.","- سؤال موجه: ما الدليل الذي تستند إليه في إجابتك؟",
"","خامسًا: أنشطة التعلم المتمايزة ("+practice+" دقائق)","1. نشاط الدعم: يقدم المعلم مثالًا محلولًا وبطاقات قصيرة، ثم يطلب من المتعلم إكمال خطوة واحدة بمساندة زميل أو تلميح.","2. النشاط الأساسي: يعمل المتعلمون في أزواج لتطبيق المفهوم على مثالين جديدين، ثم يشرحون طريقة الحل.","3. نشاط الإثراء: يصمم المتعلم مثالًا من إنشائه أو يكتشف خطأ في مثال معروض ويقترح تصويبه مع التعليل.",
"","سادسًا: التقويم من أجل التعلم ("+assess+" دقائق)","- تقويم قبلي: سؤال شفهي سريع لاستدعاء المعرفة السابقة.","- تقويم بنائي: ملاحظة أداء المجموعات، وأسئلة «كيف عرفت؟» و«هل توجد طريقة أخرى؟».","- بطاقة خروج: يكتب كل متعلم إجابة قصيرة أو مثالًا يوضح فهمه.","- معيار النجاح: يحقق المتعلم ناتج التعلم المحدد بصورة صحيحة، ويبرر إجابته عند الحاجة.",
"","سابعًا: أسئلة تقويم مقترحة","1. سؤال فهم: اشرح الفكرة الأساسية في موضوع «"+d.topic+"» بأسلوبك.","2. سؤال تطبيق: طبّق ما تعلمته على مثال جديد من إنشائك.","3. سؤال تفكير: ما الخطأ المحتمل في هذا المثال؟ وكيف تصححه؟","4. سؤال تأمل: ما الجزء الذي أتقنته؟ وما الذي تحتاج إلى مراجعته؟",
"","إجابات/مؤشرات متوقعة:","- إجابة مرتبطة بالمفهوم الأساسي وخالية من التناقض.","- تطبيق صحيح للمفهوم في سياق جديد.","- تحديد الخطأ مع تقديم تصويب مبرر.","ملاحظة: تُكتب الإجابات النموذجية الدقيقة بعد تحديد محتوى الدرس من الكتاب المدرسي.",
"","ثامنًا: مراعاة الفروق الفردية","- إتاحة وقت إضافي أو مثال محسوس لمن يحتاج إلى دعم.","- تنويع طريقة الاستجابة: شفهيًا أو كتابيًا أو باستخدام بطاقة.","- تقديم تحدٍ إضافي للمتعلمين المتقدمين دون زيادة عبء غير ضروري.",
"","تاسعًا: تأمل المعلم بعد التنفيذ","- ما الدليل الذي يثبت تحقق نواتج التعلم؟","- من يحتاج إلى دعم إضافي؟ وما نوع هذا الدعم؟","- ما التعديل الذي سأجريه في الدرس القادم؟",
"","------------------------------------------------","هذه مسودة إرشادية مولدة محليًا بقوالب عامة، وليست محتوى معتمدًا من كتاب مدرسي أو جهة رسمية. راجعها وعدّلها قبل استخدامها."
  ].join("\n");
}
form.addEventListener("submit", (event) => {
  event.preventDefault(); if (!form.reportValidity()) return;
  const d = {grade:$("grade").value,subject:clean($("subject").value,"المادة"),topic:clean($("topic").value,"موضوع الدرس"),duration:$("duration").value,students:$("students").value,objectives:$("objectives").value,prior:clean($("prior").value,"معلومات أولية يحددها المعلم من واقع مستوى المتعلمين"),resources:clean($("resources").value,"السبورة وأدوات الصف المتاحة")};
  resultText.value = makePlan(d);
  $("resultMeta").textContent = d.subject+" • "+d.grade+" • "+d.topic+" • "+d.duration+" دقيقة";
  emptyState.hidden = true; resultArea.hidden = false; copyBtn.disabled = false; printBtn.disabled = false;
  resultArea.scrollIntoView({behavior:"smooth",block:"start"});
});
copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(resultText.value); }
  catch { resultText.focus(); resultText.select(); document.execCommand("copy"); }
  copyBtn.textContent = "تم النسخ ✓"; setTimeout(()=>copyBtn.textContent="نسخ النص",1800);
});
printBtn.addEventListener("click",()=>window.print());