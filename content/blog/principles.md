---
title: "Good Engineering - Principles"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: false
tags: [Hugo, blogging, good engineering, principles]
---

Most Engineers are fully versed in the foundations of writing quality, efficient, succinct and testable code.  As a Principal Engineer, one of my responsibilities is to ensure that this baseline is (1) understood and (2) adhered to by all engineers. 

Here's a list of concepts that for me, make up good engineering principles:

_These are in alphabetical order and not in order of importance_

- [Clean and readable code](#Clean-and-readable-code)
- [Code reviews](#Code-reviews)
- [Coding standards](#Coding-standards)
- [Composition over inheritance](#Composition-over-inheritance)
- [Defensive coding](#Defensive-coding)
- [Do no more](#Do-no-more)
- [DRY](#DRY)
- [KISS](#KISS)
- [Occam's razor](#Occam's-razor)
- [Premature optimization](#Premature-optimization)
- [Refactor](#Refactor)
- [Separation of Concerns](#Separation-of-Concerns)
- [SOLID](#SOLID)
- [Testing](#Testing)
- [YAGNI](#YAGNI)


## [Clean and readable code]()

Clean and readable code is always better than clever code (ask any engineer who has to extend or maintain a _clever_ piece of code!)


## [Code reviews]()

It should only contain helpful and constructive comments and / or implementation questions. Not there to caress egos (that's for your mother to do!!)

## [Coding standards]() 

(provide a template of core standards then stand back and let the team thrash out the rest - wear protection!)


## [Composition over inheritance]()

(avoid class tree exploitation! - think Strategy pattern - GoF)


## [Defensive coding]()

(guard against invalid class method parameters and accidental null assignment to class properties instead of an equality condition!)

This is one example of defensive coding:

```csharp
class User(string firstnaame, string lastname, int age) 
{
    if (null == firstname) 
    {
        throw new NullReferenceException($"Firstname cannot be null")
    }
...
```

The above demonstrates an example of defensive coding.  The first is that we need to test for valid constructor parameter values when instantiating a class.

The second, if to avoid mistakes that might not be picked up by your compiler.  For instance, a common mistake doing this:

```csharp
if (firstname = null)
```

A .NET Compiler is more than happy allowing this above syntax, as after all, it's an **assignment operator** and not a **equality operator** as in above in the **class constructor**.  By switching these around, you're making a positive pattern changing and _should_ avoid making this silly mistake again.

## [Do no more]()

(and do no less - thank you _eXtreme Programming_!)

## [DRY]()

(don't repeat yourself)

Code analysis tools help there but you're not always going to have access to these tools.

One way to help identify code that does the same thing is by refactoring.  If you keep your code method frame small (~20 lines), and you have a good naming standard for methods, etc then this should be all you need to help you writing duplicate code.


## [KISS]()

(keep it simple, silly)

This to a certain extent, goes hand in hand with avoiding premature optimization.  We all like the big picture but that doesn't mean we need to do deliver on this big picture right now! You just need to know the boundary of this piece which if greenfield you won't have any metrics to tell you demand.  Think Capacity planning; what this piece of work needs to do based on current expectations. For example

```
Do we need multiple servers?  
Why do we need multiple servers? 
Do you have metrics to support this? 
No?! Right, next!
```

A colleague recently shared with me their architecture of a side project. They are using AWS and I have 2 certifications in AWS (Developer and Solutions Architect).  I rapidly went into HA/Scaling/DR overdrive and rapidly did a verbal dump on what tech they should be use.  This was all wrong - for their immediate requirement as they did not know demand - which would have added to their cost; unnecessarily.  I did, shortly after, re-affirm their decision (may have made 1 or 2 helpful minor suggestions).  Yeah, think big but don't deliver big without a customer base; huge waste of time, effort and money.

## [Occam's Razor]()

This is a problem-solving principle.

The definition of this is:  "Entities should not be multiplied without necessity".  It is sometimes paraphrased by a statement like "the simplest solution is most likely the right one.

Occam's razor says that when presented with competing hypotheses that make the same predictions, one should select the solution with the fewest assumptions.  Good advice

Suppose there are two competing theories on why something is not working.  Normally, the case that requires the least amount of assumptions is correct. So, the more assumptions you have to make means it more likely to be more unlikely.


## [Premature optimization]()

Avoid premature optimization and all conversations relating to optimization until you know the facts.  This will be futile until you've metrics to better inform you.

I've hit this numerous times when planning for microservices and bounded contexts, in particular, on green-field projects.  What should we include and where?  Should we separate claims away from users for instance?  Will the demand for Claims be greater than for users?  Who knows?!  You don't until you have some metrics behind you.  You can always merge or break them [microservices] up later.    

Another area that I believe this encompasses is splitting code up across multiple files and folders.  If it's a PoC, a sample piece of code, or some thing that has a short shelf life, just keep it in one file.  When it's the right time - moving out of PoC/other - then you can consider optimizing it.  Up until then, it's a huge waste of time and effort.

Architecture is a great example of when not to prematurely optimize.  Architecture normally equaates to cost.  The more of something, the greater the cost.  This could mean for a startup the difference between survival and demise.  Adopting a guiding principle of being frugal from the outset, is a prudent and wise dicison.  What this means is that you're always looking for the most cost-effective way of accomplishing your goal.  So, if you don't know your demand, it means you opt for a single server instead of having a HA cluster of 3 master nodes and 5 worker nodes!  Down from 8 servers to 1 which on a month by month basis during development and beta/early releases could mean the saving of thousands of pounds sterling.  

Sadly, I've come across a few startup that have failed just because they ran out of cash early on.  It's a real shame for all involved.

## [Refactor]()

...refactor refactor

Don't save up this until the end of a piece of work ... you're bound to miss something and possibly add to your team's tech debt.  Plus, if it's a commit to a draft PR, you'll get your _ass_ chewed by your peers!

TDD, DRY

## [Separation of Concerns]()

(think MVC, CQRS, bounded context, etc...)

It's all about doing the right this in the right place!  I recently ran, architected and co-developed a project that involved our own hosted solution, a solution hosted on **Azure** and a solution hosted on the **Twilio Cloud** (**Serverless**).  Originally, the requirements did not include the **Twilio Cloud** and would have required a bucket load more efforts if we'd stuck with that brief.  Thankfully, I chose to take full advantage of what **Twilio** has to offer and used a combination of **Twilio Flow** and **Twilio Serverless Functions**.  By establishing these SoCs meant:

- a less stressful implementation
- a light touch to our own hosted solutions
- a huge amount of fun working with **Serverless** (has been my favourite and advocated approach for several years!)
- a huge saving of time
- made available a greater range of options when dealing with specific edge and corner cases which, again, gave us a further time saving 

## [SOLID]()

These are the SOLID principles:

### SRP (single responsibility)

A class (no method) should have one and only one reason to change, meaning that a class (or method) should have only one job.

"When a class has more than responsibility, there are also more reasons to change that class"

Here's an example of a class )_purposefully awful for illustrative purposes_):

```csharp
class User() 
{
    public string Username {get; set;}
    public string Fullname {get; set;}
    private readonly ILogger _logger;
    private IDbContext _db;

    public User()
    {
        _logger = new Logger() 
        _db = new UserContext();
    }

    public Task<User> GetProfile(string username) 
    {
        ...
        _logger.Info($"Found profie for {username}")
        return this;
    }    
}
```

You could say that the above includes both a model responsibility and a service responsibility.  These should be split into two seperate .NET types, as in this example:

```csharp
class User() 
{
    public string Username {get; set;}
    public string Fullname {get; set;}
    public User(string username, string Fullname) 
    {
        ...
    }    
}

class UserService() 
{
    private readonly ILogger _logger;

    public UserService(ILogger _logger, IDbContext db)
    {
        _logger = _logger    
        _db = db;    
    }

    public Task<User> GetProfile(string username) 
    {
        ...
        _logger.Info($"Found profie for {username}")
        return user;
    }    
}
```

Here are benefits of principles:

- Reduces complixity in your code
- Increases readability, extensibility and maintenance of your code
- Reusability and bug breading
- Easier to test
- Reduces coupling by removing dependency between methods

### OCP (open-closed)

Objects or entities should be open for extension, but closed for modification.

### Liskov

Definnition: "_Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T._" ... clear as mud right?

All this is stating is that every subclass/derived class should be substitutable for their base/parent class.

### Interface segregation

A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.

Take the following interface:

```csharp
public interface IAllTheThings 
{
    Task<IAsyncEnumerable<Claim>> GetClaims(string username);
    Task<IAsyncEnumerable<User>> GetUsers(string team);
    Task<User> AddUsers(User user);
}
```

There's a clear distinction in responsibilities that are being suggested here by the contract name.  Sufficed to say, these should be split across different interfaces:

```csharp
public interface IUser 
{    
    Task<IAsyncEnumerable<User>> GetUsers(string team);
    Task<User> AddUsers(User user);
}

public interface IClaim
{
    Task<IAsyncEnumerable<Claim>> GetClaims(string username);    
}
```

### Dependency Inversion

Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

Example:
```csharp
```

---

I'm a huge fan of patterns, especially cloud architectural patterns but sometimes, they add unnecessary complicity so beware!

When I first started learning about patterns - some 18 years ago - I when through some of my code to see if I'd inherently been repeatedly using a pattern ... and I was!  It was the **lazy loading** pattern...which I continue to use regularly!

## [Testing]()

(unit/functional, and proficient with concepts like TDD & BDD)

Requires a detailed spec and test cases.

Reduction in verbose code, rapid development, succint (do no more, no less than is required)


## [YAGNI]()

(you ain't going to need it) 

Do no more, and no less than is required.  You do not 



As a Principal Engineer, I consider the above as the foundation to writing quality code.  The objective of this list, in conjunction with the message I propagate via this list, during discussions, evidence from my own work and by leading from the front  within my role, is one of reminder to me and my colleagues of best practice and commitment to quality and good practice. As with all foundations, it forms the base from which more advanced concepts or approaches can be learned.  An important part of this practice is heuristic - enabling a person to discover or learn something by themselves.  So, how do I go about doing this?

These are some of the activities I execute to embed good engineering principles:

- 1-2-1
- Group conversations
- Advocate online learning platforms such as Pluralsight or Udemy.  For the more keen Engineer, I also recommend certification. YouTube is another favourite of mine. With YouTube, you are able to tag recordings, therefore building up a catalogue of materials that you can make public
- Workshops
- Brown bags
- Capture _How To Do's_ in wikis or similar
- Coding advice/tips (e.g. when to use Task instead of an Async method)
- Take the time to explain questions about implementation reasons in DVCS Pull Requests
- Share blog posts & other materials across multiple channels
- Compile a learning profile for an individual

The coding advice/tips above are interesting ones. As professionals we always want to improve our ability to code etc and in doing so we want our colleagues to benefit from our knowledge too.  I recently became reacquainted with coding katas.  As a black belt in Ju-Jitsu I am well versed in what a kata is.  Katas can also be used to remind, stretch and improve our core coding capability.  The last time I used a kata in programming was 10+ years ago. This was when I was first introduced to TDD.  A favourite development book of mine is **'The Art of Unit Testing'** by Roy Osherove. It was the first edition.  For many years I had it as a click thru purchase option on a previous site of mine. I've not really participated in many kata's since.  I have written a few though and now having been reintroduced to them and their potential, as a Principal Engineer I can see it as an invaluable tool for both providing the framework to assess an Engineer's current capability and as an aid to building an Engineer's skills when used with **pair programming**.

**Pair programming** is a wonderful technique for propagating skills.  Quite often, I find I only participate in pair programming in one of two use cases.  (1) if the subject I'm investigating is new (important to have shared knowledge) and (2) when I'm helping an Engineer to overcome a esoteric issue.  You know what they say? ...a problem shared is a problem halved!  However, now, I'll be including **Pair Programming** as part of my techniques to stretch the Engineer's muscle memory (including mine!).  

_Discussion point ..._

I'm sure I'm not alone here when I say, having the time available for 2 Engineers to code together for skills transfer etc is a challenging one.  An agile sprint doesn't really facilitate this.  This is something that I often refer to as having the 'space to learn'.  The pressures of a sprint often, sadly, works against this.  This is doubly as difficult, if your sprint is made up of technical debt, BAU, Ad hoc etc...  Time boxing 'effort' into percentages doesn't always present an obvious education path for your Engineers either.  Having a day (developer day or similar) dedicated to learning also never  really quite works out the way it's meant too, plus, 'a day'?!  In my experience this, and trying to cram _genius_ into a time box also never quite works either.  After all, you can't schedule _genius_, in the same way you can't guarantee that the best Engineers are in your locality, or that the best time for Engineers to work is between 9-5. 

_What is the answer? A mixture of all the above, at hock and as scheduled times, to ensure quality and advancement of skills._

When I do speak out regarding the above, I inevitably also lead this conversation into Engineering not having the kit [hardware & software] they need.  Engineers require the software and hardware they deem as necessary to be effective in their role.  I once gave an analogy of, not giving Engineers the right kit is like giving a roller brush and a Pogo stick to Michelangelo to paint the Sistine Chapel ceiling.  He'll manage it ... eventually, but the attention to detail and accuracy will be woefully inadequate.

#### References:

- [The pragmatic programmer](https://pragprog.com/the-pragmatic-programmer/extracts/tips)

- [YAGNI](https://martinfowler.com/bliki/Yagni.html)

- [XP](https://www.agilealliance.org/glossary/xp)