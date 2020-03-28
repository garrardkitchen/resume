---
title: "Good Engineering - Principles"
date: 2020-03-01T20:09:14+01:00
draft: false
featured: true
tags: [Hugo, blogging, good engineering, principles]
---

I have written this post as a method document what I see as the basics, foundations if you will, for good engineering.  Undouteditly, if you are a seasoned engineer, you will recognised all of these principles, less so, if you're just starting out.

Most Engineers are fully versed in the foundations of writing quality, efficient, succinct and testable code.  As a Principal Engineer, one of my responsibilities is to ensure that these (1)  foundations are recognised by the engineers and (2) are adhered to by all engineers. 

Here's a list of concepts that for me, constitute good engineering principles:

_These are in alphabetical order and not in order of importance_

- [Clean and readable code](#clean-and-readable-code)
- [Code reviews](#code-reviews)
- [Coding standards](#coding-standards)
- [Composition over inheritance](#composition-over-inheritance)
- [Defensive coding](#defensive-coding)
- [Do no more](#do-no-more)
- [DRY](#dry)
- [KISS](#kiss)
- [Occam's razor](#occam's-razor)
- [Premature optimization](#premature-optimization)
- [Refactor](#refactor)
- [Separation of Concerns](#separation-of-concerns)
- [SOLID](#solid)
- [Testing](#testing)
- [YAGNI](#yagni)

Other sections:

- [My pattern discovery](#my-pattern-discovery)
- [Being a Principal Engineer](#being-a-principal-engineer)
- [Discussion point](#discussion-point)
- [References](#references)

### [Clean and readable code]()

Clean and readable code is always better than clever code (ask any engineer who has to extend or maintain a _clever_ piece of code!)

I've seen a lot of code recently that should never have got to the shape it has.  Complicated code requires time to understand, then time to add functionality.  Complicated code also happens to more difficult to recall so each time you need to go near it, you have to relearn it and added to this, any changes made to improve it, most likely have not been applied in full so they'll be a right old mixture of good, bad and the ugly thrown into the mix.  

A good measure of how bad a codebases is, and I'm going to plagiarise somebody else's analogy here, is by stepping through an interactive debug session. If you get momentarily distracted by a fly, then immediately return to the debugging and you do not know where the feck you are in the execution of the code flow, then it's a bad codebase! 

It's the responsibility of a Tech Lead or architecture to stop code bases ending up this way.

### [Code reviews]()

It should only contain helpful and constructive comments and/or implementation questions. This process is not there to caress egos (that's for your mother to do!!).  One useful by-product of **code reviews** is conveying of your team's exacting coding standard and attention to deal, to new starters.  So, the quicker the new starter pushes a commit, the better! 

### [Coding standards]() 

(provide a template of core standards then stand back and let the team thrash out the rest - wear protection!)

Although important, it's not the end of the world if some of the granular details differ between teams.  The important thing here, in my opinion, is that each team know where to find their cheese.  Most engineers in a team have a common set of standards they adhere too.  The big things like solution structure, naming conventions, testing (**AAA**, **GWT**), pluralization, documentation structure (including README) all need to be consistent.

### [Composition over inheritance]()

(avoid class tree exploitation! - think **Strategy pattern** - GoF)

The above-bracketed statement says it all!  **Inheritance** tends to back you into a corner especially when you consider the **OCP**.

### [Defensive coding]()

(guard against invalid class method parameters and accidental null assignment to class properties instead of an equality condition!)

This is one example of defensive coding:

```csharp
class User(string firstnaame, string lastname, int age) 
{
    if (null == firstname) 
    {
        throw new NullReferenceException("Firstname cannot be null")
    }
...
```

The above demonstrates an example of defensive coding.  The first is that we need to test for valid constructor parameter values when instantiating a class.

The second, if to avoid mistakes that might not be picked up by your compiler.  For instance, a common mistake doing this:

```csharp
if (firstname = null)
```

A .NET Compiler is more than happy allowing this above syntax, as, after all, it's an **assignment operator** and not a **equality operator** as in above in the **class constructor**.  By switching these around, you're making a positive pattern changing and _should_ avoid making this silly mistake again.

### [Do no more]()

(and do no less - thank you _eXtreme Programming_!).

If you code outside the scope, you're in danger of creating code that isn't used or needed.  The worse thing about this is that others will have to maintain this code.  How can this be?  Well, it's common - think **HTTP chaining** - for code not to be culled especially if there is a disconnect between these dependencies and there's no IDE/compiler to shout at you.

### [DRY]()

(don't repeat yourself)

**Code analysis** tools help here, but you're not always going to have access to these tools.

One way to help identify code that does the same thing is by **refactoring**.  If you keep your code method frame small (~20 lines), and you have a good naming standard for methods (e.g. noun+verb with accurate alighment to business capability - think DDD), have unit tests with a high **code coverage** percentage, then this should be all you need to help you avoid writing duplicate code.

### [KISS]()

(keep it simple, silly)

This to a certain extent, goes hand in hand with avoiding **premature optimization**.  We all like the big picture  yes? This doesn't mean we need to do deliver on this it right now! You just need to know the boundaries of this piece, which, if greenfield, then you won't have any metrics to tell you the actual demand.  Think Capacity planning; what this piece of work needs to do based on current expectations. For example


    Do we need multiple servers? Yes, I think 
    Why do we need multiple servers?  Mmmmm, because I read it somewhere
    Do you have the metrics that support your argument for multiple servers? Wait, what?
    Next!


A colleague recently shared with me the architecture of their side project. They are using **AWS** and I have 2 **certifications** in **AWS** (**Developer** and **Solutions Architect**).  I quickly went into **HA**/**scaling**/**resilience**/**durability**/**DR** overdrive, following it up with a verbal dump on what tech they should use.  This was all wrong.  They did not know their service demand.  Following my initial advice, will have increased their cost; unnecessarily.  I did, you'll be glad to hear, re-affirm their decision (may have made 1 or 2 helpful suggestions) shortly after [~2 hours]. 

Yeah, think big but don't deliver big without a customer base; as this, in my experience, will result in a huge waste of time, effort and money. Plus, sometimes, you don't really know where something is going to take you, and my advice here is to roll with it.  This last piece of advice is particularly pertinent if you're starting up. 

### [Occam's Razor]()

This is a problem-solving principle.

The definition of this is:  "Entities should not be multiplied without necessity".  It is sometimes paraphrased by a statement like "the simplest solution is most likely the right one.

**Occam's razor** says that when presented with competing hypotheses that make the same predictions, one should select the solution with the fewest assumptions.  Good advice

Suppose there are two competing theories on why something is not working.  Normally, the case that requires the least amount of assumptions is correct. So, the more assumptions you have to make means it more likely to be more unlikely.


### [Premature optimization]()

Avoid premature optimization and all conversations relating to optimization until you know the facts.  This will be futile until you've **metrics** to better inform you.

I've hit this numerous times when planning for **microservices** and bounded contexts, in particular, on green-field projects.  What should we include and where?  Should we separate claims away from users for instance?  Will the demand for Claims be greater than for users?  Who knows?!  You don't until you have some **metrics** behind you.  You can always merge or break them [**microservices**] up later.    

Another area that I believe this encompasses is splitting code up across multiple files and folders.  If it's a PoC, a sample piece of code, or something that has a short shelf life, just keep it in one file.  When it's the right time - moving out of PoC/other - then you can consider optimizing it.  Up until then, it's a huge waste of time and effort.

Architecture is a great example of when not to prematurely optimize.  Architecture normally infers cost.  Generally, the more of something, the greater the cost.  This could mean for a startup the difference between survival and their demise.  Adopting a **guiding principle** of being **frugal** from the outset, is a prudent and wise decision.  What this means is that you're always looking for the most cost-effective way of accomplishing your goal.  So, if you don't know your demand, it means you opt for a single server instead of having a **HA** cluster of 3 master nodes and 5 worker nodes!  Down from 8 servers to 1 which on a month by month basis during development and beta/early releases could mean the saving of thousands of pounds sterling.  

Sadly, I've come across a few startup that have failed just because they ran out of cash early on.  It's a real shame for all involved.

### [Refactor]()

...refactor refactor

Don't save this until the end of a piece of work ... you're bound to miss something and possibly add to your team's tech debt.  Plus, if you push your commits to a **PR**, you'll get your _ass_ handed to you by your peers!

Things to consider here are **DRY** and **TDD**.  Both will nudge you towards a proper refactoring effort.

### [Separation of Concerns]()

(think **MVC**, **CQRS**, **bounded context**, etc...)

It's all about doing the right this in the right place!  I recently ran, architected and co-developed a project that involved our own hosted solution, a solution hosted on **Azure** and a solution hosted on the **Twilio Cloud** (**Twilio Serverless Functions**).  Originally, the requirements did not include the **Twilio Cloud** and would have required a bucket load more effort if we'd stuck with that brief.  Thankfully, I chose to take full advantage of what **Twilio** has to offer and used a combination of **Twilio Flow** and **Twilio Serverless Functions**.  By establishing these SoCs it meant:

- a less stressful implementation
- a light touch to our own hosted solutions
- a satisfying amount of fun working with **Serverless** (has been my favourite and advocated approach for several years!)
- a time saving
- it revealed a range of options when dealing with specific edge and corner cases which, again, giving us a further time savings.

### [SOLID]()

These are the SOLID principles:
- [Single Responsibility Principle](#single-responsibility-principle)
- [Open Closed Principle](#open-closed-principle)
- [Liskov Principle](#liskov-principle)
- [Interface Segregation Principle](#interface-segregation-principle)
- [Dependency Inversion Principle](#dependency-inversion-principle)

#### [Single Responsibility Principle]()

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

You could say that the above includes both a model responsibility and a service responsibility.  These should be split into two separate .NET types, as in this example:

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

Here are the benefits of principles:

- Reduces complexity in your code
- Increases readability, extensibility, and maintenance of your code
- Reusability and bug breading
- Easier to test
- Reduces coupling by removing dependency between methods

#### [Open Closed Principle]()

Objects or entities should be open for extension, but closed for modification.  So, what does this mean?  Let's break this down to two statements:
- Open for extension
- Closed for modification

##### Open for extension:

This means that we need to design our classes in such a way that it's new responsibilities or functionalities should be added easily when new requirements come.

One technique for implementing new functionality is by creating new derived classes.  A derived class will inherit from base class.  Another approach is to allow the 'client' to access the original class with an abstract interface.  I sometimes think of this simply as removing `if statements` by extension but I'm not convinced everybody would agree with this assessment though.

So, in short, if there's an amendment or any new features required, instead of touching the existing functionality, it is better to create new derived class and leave the original class implementation.  Well, that's the advice!  I worry about the **class explosion** and if you're attempting to do this on top of not so perfect code! 

##### Closed modification:

This is very easy to explain...only make modifications to code if there's a bug.

This sample looks at delegating method logic to derived classes.

```csharp
public class Order 
{
    public double GetOrderDiscount(double price, ProductType productType) 
    {
        double newPrice = 0;
        if (productType == ProductType.Food) 
        {
            newPrice = price - 0.1;
        } 
        else if (productType == ProductType.Hardware) 
        {
            newPrice = price - 0.5;
        }
        return newPrice;
    }
}

public enum ProductType 
{
    Food,
    Hardward
}
```

Can rewrite, still using base implementation (think **decorator pattern**):

```csharp
public class Order 
{
    public virtual double GetOrderDiscount(double price) 
    {
        return price;
    }
}

public class FoodOrder : Order 
{
    public override double GetOrderDiscount(double price) 
    {
        return base.GetOrderDiscount(price) - 0.1;
    }
}

public class HardwareOrder : Order 
{
    public override double GetOrderDiscount(double price) 
    {
        return base.GetOrderDiscount(price) - 0.5;
    }
}
```

#### [Liskov Principle]()

Definition: "_Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T._" ... clear as mud right?

All this is stating is that every subclass/derived class should be substitutable for their base/parent class.

The example below demonstrates a violation of the **Liskov principle**, as by replacing the parent class (SumEvenNumbersOnly->Calculator), this does compromise the integrity of the **derived class** as the **higher-order class** is not replaced by the **derived class**.  Here, both `cal` and `eventsOnly` variables will be the same: 
```csharp
...
var nums = new int[] {1, 2, 3, 4, 5, 6, 7};
Calculator cal = new Calculator(nums);
Calculator evensOnly = new SumEvenNumbersOnly(nums);
...
public class Calculator
{
    protected readonly int[] _numbers;

    public Calculator(int[] numbers)
    {
        _numbers = numbers;
    }

    public int Sum() => _numbers.Sum();
}

public class SumEvenNumbersOnly : Calculator
{
    public SumEvenNumbersOnly(int[] numbers) : base(numbers)
    {
    }

    public new int  Sum() => _numbers.Where(x=>x % 2 == 0).Sum();
}
```

Here we have changed the assumed base class to an **abstract class**. Now, it can't be instantiated and instead, must be inherited.  This ensures the **derived classes** must implement the method detail. So, even if we replace the type declaration with the **higher-order** class, we should still get the intended result:

```csharp
...
var nums = new int[] {1, 2, 3, 4, 5, 6, 7};
Calculator cal = new SumAllNumbersOnly(nums);
Calculator evensOnly = new SumEvenNumbersOnly(nums);
... 
public abstract class Calculator
{
    protected IEnumerable<int> _num;

    protected Calculator(IEnumerable<int> num)
    {
        _num = num;
    }

    public abstract int Sum();
}

public class SumAllNumbersOnly : Calculator
{
    public SumAllNumbersOnly(IEnumerable<int> num) : base(num)
    {
    }
    public override int Sum() => _num.Sum();
}

public class SumEvenNumbersOnly : Calculator
{
    public SumEvenNumbersOnly(IEnumerable<int> num) : base(num)
    {
    }
    public override int Sum() => _num.Where(x => x % 2 == 0).Sum();
}
```

#### [Interface Segregation Principle]()

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

#### [Dependency Inversion Principle]()

There are 2 rules here:
- High-level modules should not depend on lower-level modules. Both should depend on abstractions.
- Abstractions should not depend upon details. Details should depend upon abstractions.

Let's deal with the first rule first.  High-level means policy, business logic and the bigger picture.  Lower-level means, closer to the bare metal (think **I/O**, **networking**, **Db**, **storage**, **UI**, etc...).  Lower-level tend to change more frequently too.


These two examples show perfectly the before and after of the move to a 'depend on abstraction':

```csharp
public class BusinessRule 
{
    private DbContext _context;    
    public BusinessRule() 
    {
        _context = new DbContext();
    }
    public Rule GetRule(string ruleName) 
    {
        _context.GetRuleByName(ruleName);
    }
}

public class DbContext 
{     
    public DbContext() 
    {        
    }
    public Rule GetRuleByName(string name) 
    {
        return new Rule(new {Name = "Allow All The Things", Allow = false})
    }
}

```

After changing to an abstraction:

```csharp
public interface IDbContext 
{
    Rule GetRuleByName(string name);
}

public class BusinessRule 
{
    private IDbContext _context;    
    public BusinessRule(IDbContext context) 
    {
        _context = context;
    }
    public Rule GetRule(string ruleName) 
    {
        _context.GetRuleByName(ruleName);
    }
}

public class DbContext : IDbContext
{     
    public DbContext() 
    {        
    }
    public Rule GetRuleByName(string name) 
    {
        return new Rule(new {Name = "Allow All The Things", Allow = false})
    }
}

```
With the above change, the DbContext can be any class as long as it inherits from the IDbContext interface and has a method with a signature of Rule GetRuleByName(string name).

The above is demonstrative of the 2nd rule; do not depend on the detail. As you can see, in the example above, we're depending on an interface method contract and the actual implementational detail is being dealt with by the Lower-level class.

The above example includes **Dependency Injection**.  Although you can accomplish **IoC** with **DI**, they are not the same thing.  **IoC** does not mention anything about the direction of the dependency.

##### Generalization restrictions

The presence of interfaces to accomplish the Dependency Inversion Pattern (DIP) has other design implications in an object-oriented program:

- All member variables in a class must be interfaces or abstracts
- All concrete class packages must connect only through interface or abstract class packages
- No class should derive from a concrete class
- No method should override an implemented method
- All variable instantiation requires the implementation of a creational pattern such as the factory method or the factory pattern, or the use of a dependency-injection framework.

### [Testing]()

(**unit**/**functional**, including concepts like **TDD** & **BDD** and frameworks)

For testing to be a success, the details are key.  These details will come in the form of a specification or from a verbal conversation (always to be confirm in writing later).  If you're lucky, these test cases will be included as **ACs** (**Acceptance Criteria**) in the **Scrum Story Description**.

Taking a **test driven development** approach to writing code often results in:

- a reduction in verbose code
- less post-deployment bug fixing
- succinct (do no more, no less than is required), structure and logic.

Testing is important.  Obviously!  I often refer to testing as 'having your back'.  It ensures you don't break existing functionality when implementing new functionality or dealing with **tech debt**.  It also protects new engineers from breaking things as well as extant engineers who may have touched this repository many times before.

Tests aren't just for new functionality either.  If you change extant functionality or class responsibilities you must modify extant tests or create new tests.  Ideally, your **CI** build pipeline should run tests every time time a commit(s) is pushed to a **PR** or **Draft PR**.  This last step is here, to again, have your back and to safeguard against erroneous code poluting your codebases and getting into production.

In the **.NET** world, there are many **testing frameworks** available; **xUnit**, **NUnit**, **MSTest** to name a few.  There are also many mocking frameworks available; **Moq**, **NSubstitute**, **JustMock**, again, to name a few.  Frameworks like these help make the testing process and overall experience less painful and cumbersome and some might even say it makes this part of development, pleasurable!

My **.NET Core** testing and mocking preferences are [xUnit](https://xunit.net/) & [Moq](https://github.com/moq/moq4) and my javascript (including **node.js**) testing framework preference is [Jest](https://jestjs.io/).

This code sample shows how both a testing and mocking frameworks compliment each other:

```csharp
using Moq;
using Xunit;

namespace BasicAAATestExample
{
    public interface IUser
    {
        string GetFullname();
        string Firstname { get; set; }
        string Lastname { get; set; }
    }

    public class User : IUser
    {
        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string GetFullname()
        {
            return $"{Firstname} {Lastname}";
        }
    }

    public class Notify
    {
        private IUser _user;

        public Notify(IUser user) => _user = user;

        public string GetMessage() => $"{_user.GetFullname()} has been notified";
    }

    public class NotifyTests
    {
        [Theory]
        [InlineData("Garrard", "Kitchen", "Garrard Kitchen has been notified")]
        [InlineData("Charles", "Kitchen", "Charles Kitchen has been notified")]
        public void GivenGetMessageIsCalled_WhenFirstAndLastNameExist_ThenReturnsANotificationMessage(string firstname,
            string lastname, string expected)
        {
            // arrange
            var mockUser = new Mock<IUser>();
            mockUser.Setup(x => x.GetFullname()).Returns($"{firstname} {lastname}");
            var sut = new Notify(mockUser.Object);

            // act
            string message = sut.GetMessage();

            // assert
            Assert.Equal(expected, message);
            mockUser.Verify(x => x.GetFullname(), Times.Once);
        }
    }
}
```

The single unit test above follows the **AAA** (**Arrange, Act, Assert**) pattern and is a common way of writing **unit tests** for a method under test:

- the `Arrange` section of a unit test method initializes objects and sets the value of the data that is passed to the method under test
- the `Act` section invokes the method under test with the arranged parameters
- the `Assert` section verifies that the action of the method under test behaves as expected.

There are a few standards I adhere to when it comes to writing tests.  In the sample unit test above these standards include:

- the method name (`GWT`)
- the comment blocks of `arrange`, `act` and `assert`
- the name of the mock instantiated object (`mock<Class>`)
- the class name of the SUT - system under test - (`sut`).


### [YAGNI]()

(you ain't going to need it) 

Do no more, and no less than is required.  You do not want to have to maintain code that is never used or produce code that others have to maintain unwittingly. It's very difficult to future proof your code if you do not know what's going to happen, let alone without a specification!  It's a guess at best so don't waste your time or others.  Keeps things concise, succinct and simple.

---

### [My pattern discovery]()

I'm a huge fan of **patterns**, especially **cloud architectural patterns** but sometimes, they add unnecessary complicity so beware!

When I first started learning about patterns - some 18 years ago - I went through a few codebases I was involved with at the time to see if I'd subconsciously been repeatedly using a pattern ... and I had!  It was the **lazy loading** pattern...which I continue to use regularly today!


### [Being a Principal Engineer]()

As a Principal Engineer, I consider the above as the foundation for writing quality code.  The objective of this list, in conjunction with the message I propagate via this list, during discussions, evidence from my own work and by leading from the front within my role, is one of a reminder to me and my colleagues of best practice and commitment to quality and good practice. As with all foundations, it forms the base from which more advanced concepts or approaches can be learned.  An important part of this practice is heuristic - enabling a person to discover or learn something by themselves.  So, how do I go about doing this?

These are some of the activities I execute to embed good engineering principles:

- 1-2-1
- Group conversations
- Advocate online learning platforms such as Pluralsight or Udemy.  For the more keen Engineer, I also recommend certification. YouTube is another favourite of mine. With YouTube, you can tag recordings, therefore building up a catalogue of materials that you can make public
- Workshops
- Brown bags
- Capture _How To Do's_ in wikis or similar
- Coding advice/tips (e.g. when to use Task instead of an Async method)
- Take the time to explain questions about implementation reasons in DVCS Pull Requests
- Share blog posts & other materials across multiple channels
- Compile a learning profile for an individual

The coding advice/tips above are interesting ones. As professionals, we always want to improve our ability to code, how we approach problems, etc..., and in doing so we want our colleagues to benefit from our experience.  I recently became reacquainted with coding **katas**.  As a black belt in Ju-Jitsu I am well versed in what a **kata** is.  **Katas** can also be used to remind, stretch and improve our core coding capability.  The last time I used a **kata** in programming was 10+ years ago. This was when I was first introduced to **TDD**.  A favourite development book of mine is **'The Art of Unit Testing'** by Roy Osherove. It is the first edition.  For many years I had it as a click-thru purchase option on a previous blog site of mine.  I've not _really_ participated in many **katas** since.  I have written a few though and now having been reintroduced to them and reminded of their potential, as a Principal Engineer I can see it as an invaluable tool.  One thought I've had is to use it as a framework to assess an Engineer's current capability and then use during **pair programming** to help share coding techniques, approaches and standards.

**Pair programming** is a wonderful technique for propagating developer skills (think how to use cloud services), approaches to coding (think TDD and problem solving), embed team coding standards and code review in realtime.  **Pair Programming** is an **Extreme Programming** technique.  It is **not a mentoring or coaching** technique but some do use it for this.  Quite often, I find I only participate in pair programming is one of two use cases.  (1) if the subject I'm investigating is new (important to have shared knowledge) and (2) when I'm helping an Engineer to overcome an esoteric issue.  You know what they say? ...a problem shared is a problem halved!  However, now, I'll be including **Pair Programming** in conjunction with **katas** as part of my techniques to stretch the Engineer's muscle memory (including mine!).

I love hacking away at code as much as the next Engineer.  Hacking code is a great way to experiment and to get out of the starting gate.  However, when it comes to pair programming I do like to give it the necessary due diligence.  By this I am referring to allowing for a few moments up front to deliberate and agree on what's required. This checklist guides me and ensures up front I set off in the right frame of mind:

- the objective of the **pair programming** exercise (think the desired outcome - you might even want to frame this with a Story Description; AS A, I WANT, SO THAT)
- what libraries (3rd party) will we need (think cloud provider SDKs and vendor client APIs)
- how are we going to test the code we write (think **unit tests**, **integration**, **functional** [**e2e**] as well as your approach e.g. **TDD**).

After the session has finished I like to perform one final task.  This is to document findings/learnings and areas that require further investigation.  This is normally helped by capturing notes as we go along.

As a side note to **TDD**, with modern compilers (think Roslyn in the .NET world) and even linting to a certain extent, you know if something will fail - if a reference type (.NET) does not exist yet - as your IDE _will be screaming at you_, so I don't run tests that are missing these reference types (think classes and interfaces in the .NET world).   

### [Discussion point]()

I'm sure I'm not alone here when I say, having the time available for 2 Engineers to code together for skills transfer etc is a challenging one.  An agile sprint doesn't facilitate this.  This is something that I often refer to as having the 'space to learn'.  The pressures of a sprint often, sadly, works against this.  This is doubly as difficult, if your sprint is made up of technical debt, BAU, Ad-hoc etc...  Timeboxing 'effort' into percentages doesn't always present an obvious education path for your Engineers either.  Having a day (developer day or similar) dedicated to learning also never really quite works out the way it's meant too, plus, 'a day'?!  In my experience, this, and trying to cram _genius_ into a time box also never quite works either.  After all, you can't schedule _genius_, in the same way, you can't guarantee that the best Engineers are in your locality, or that the best time for Engineers to work is between 9-5. 

_What is the answer? A mixture of all the above, at hock and at scheduled times, to ensure quality and advancement of skills._

When I do speak out regarding the above, I inevitably also lead this conversation into Engineering not having the kit [hardware & software] they need.  Engineers require the software and hardware they deem as necessary to be effective in their role.  I once gave an analogy of, not giving Engineers the right kit is like giving a roller brush and a Pogo stick to Michelangelo to paint the Sistine Chapel ceiling.  He'll manage it ... eventually, but the attention to detail and accuracy will be woefully inadequate.

---

Written mainly for me, I do hope you've found something useful here, and who knows, it may even help you with your engineering journey too.

---

#### [References]()

- [The pragmatic programmer](https://pragprog.com/the-pragmatic-programmer/extracts/tips)

- [YAGNI](https://martinfowler.com/bliki/Yagni.html)

- [XP](https://www.agilealliance.org/glossary/xp)

- [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

- [OOP design patterns](http://web.science.mq.edu.au/~mattr/courses/object_oriented_development_practices/5/notes.html)

- [Inversion of Control Containers and the Dependency Injection pattern](https://www.martinfowler.com/articles/injection.html)

- [Write your tests](https://docs.microsoft.com/en-us/visualstudio/test/unit-test-basics?view=vs-2019#write-your-tests)